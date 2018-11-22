import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"
import { WeatherProp } from "../../models/weather-prop"
import { WeatherHead } from "../../models/weather-head"
import { open } from "realm"
import { NavigationScreenProp } from 'react-navigation'

export function uploadFile(nav: NavigationScreenProp<{}>) {
	DocumentPicker.show({
		filetype: [DocumentPickerUtil.allFiles()],
	}, (error, res) => {

		if (error || !res || res.uri.split('.').pop() !== 'his')
			return

		const url = res.uri
		RNFS.readFile(url).then((res) => {
			const lines = res.split('\n')
			const headers = lines[1].split('\t')
			const splitedLines: Array<string[]> = []
			const fileName = lines[2].split(" ")[0]
			const path = RNFS.ExternalDirectoryPath + '/' + fileName + '.his'

			lines.splice(0, 2)
			for (let i = 0; i < lines.length || lines[i - 120]; i += 120)
				splitedLines.push(lines[i].split('\t'))

			const props = splitedLines[0].map((col, i) => splitedLines.map(row => row[i]))
			open({ schema: [WeatherProp.schema, WeatherHead.schema] }).then(realm => {
				try {
					const heads = realm.objects<WeatherHead>('WeatherHead').filtered(`name == "${headers[0]}"`)
					if (heads.isEmpty()){
						throw new Error()
					}
				}
				catch{
					headers.forEach(head => {
						realm.write(() => {
							realm.create<WeatherHead>('WeatherHead', {
								name: head
							})
						})
					})
				}

				try {
					const proprieties = realm.objects<WeatherProp>('WeatherProp').filtered(`day == "${fileName}"`)
					if (proprieties.isEmpty())
						throw new Error()
				}
				catch {
					props.forEach((prop, index) => {
						realm.write(() => {
							realm.create<WeatherProp>('WeatherProp', {
								propName: headers[index],
								props: prop,
								day: fileName,
							})
						})
					})
				}

				RNFS.moveFile(url, path)
				nav.navigate('Files')
			})
		})
	})
}
