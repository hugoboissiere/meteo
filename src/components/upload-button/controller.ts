import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"
import { WeatherProp } from "../../models/weather-prop"
import { WeatherHead } from "../../models/weather-head"
import { open } from "realm"

export function moveFile(url: string) {
	if (url.split('.').pop() !== 'his')
		return
	RNFS.readFile(url).then((res) => {
		const lines = res.split('\n')
		const headers = lines[1].split('\t')
		const splitedLines: Array<string[]> = []

		lines.splice(0, 2)
		for (let i = 0; i < lines.length; i += 120)
			splitedLines.push(lines[i].split('\t'))

		const props = splitedLines[0].map((col, i) => splitedLines.map(row => row[i]))
		open({ schema: [WeatherProp.schema, WeatherHead.schema] }).then(realm => {
			headers.forEach(head => {
				realm.write(() => {
					realm.create<WeatherHead>('WeatherHead', {
						name: head
					})
				})
			})

			props.forEach((prop, index) => {
				realm.write(() => {
					realm.create<WeatherProp>('WeatherProp', {
						propName: headers[index],
						props: prop
					})
				})
			})
		})

		const fileName = lines[1].split(" ")[0]
		const path = RNFS.ExternalDirectoryPath + '/' + fileName + '.his'
		RNFS.moveFile(url, path)
	})
}

export function tryUploadFile() {

	DocumentPicker.show({
		filetype: [DocumentPickerUtil.allFiles()],
	}, (error, res) => {
		// Android
		if (error)
			return
		moveFile(res.uri)
	})
}
