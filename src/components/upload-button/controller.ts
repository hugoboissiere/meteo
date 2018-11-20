import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"

export function moveFile(url: string) {

	RNFS.readFile(url).then((res) => {

		let array = res.split('\n');
		let document: String[][] = [];
		array.splice(0, 2);
		array.forEach(element => {
			const item = element.split('\t');
			document.push(item);
		});
		console.log(document[0]);
		const fileName = document[0][0].split(" ")[0];
		const path = RNFS.ExternalDirectoryPath + '/' + fileName + '.his';
		RNFS.moveFile(url, path).then(() => {
			console.log("File Moved to ", path);
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
