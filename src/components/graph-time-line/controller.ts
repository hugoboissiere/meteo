import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"

const FILE_START = 2

export function moveFile(url: string) {
	RNFS.readFile(url).then((res) => {
		const array = res.split('\n')
		const document: String[][] = []

		array.splice(0, FILE_START)
		array.forEach(element => {
			const item = element.split('\t')
			document.push(item)
		})

		const fileName = document[0][0].split(" ")[0]
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
