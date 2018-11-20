import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"

export function moveFile(url: string) {

	const path = RNFS.ExternalDirectoryPath + '/test.txt'

	RNFS.moveFile(url, path).then(() => {

	}).catch((err) => {
		console.warn("Error: " + err.message)
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
