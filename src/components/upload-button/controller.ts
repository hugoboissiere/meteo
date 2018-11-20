import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"
import { WeatherProp } from "../../models/weather-prop"
import { open } from "realm"

export function moveFile(url: string) {
	if (url.split('.').pop() !== 'his')
		return
	RNFS.readFile(url).then((res) => {
		const array = res.split('\n')
		const headers = array[1].split('\t')
		array.splice(0, 2)

		open({ schema: [WeatherProp.schema] }).then(realm => {
			for (let i = 0; i < array.length; i += 120) {
				const item = array[i].split('\t')
				console.log(item[0])
				item.forEach((prop, index) => {
					realm.write(() => {
						realm.create<WeatherProp>('WeatherProp', {
							propName: headers[index],
							propValue: prop,
							date: item[0]
						})
					})
				})
			}
			console.log("display:", realm.objects<WeatherProp>('WeatherProp'))
		}).catch(error => {
			console.log("error:", error)
		})

		const fileName = array[0].split(" ")[0]
		const path = RNFS.ExternalDirectoryPath + '/' + fileName + '.his'
		RNFS.moveFile(url, path).then(() => {

		})
			.catch((err) => {
				console.warn("Error: " + err.message)
			})
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
