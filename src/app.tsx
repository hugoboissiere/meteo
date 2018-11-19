import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker';
import * as RNFS from "react-native-fs";
export interface AppProps { }

export class App extends Component<AppProps> {

	TryUploadFile = () => {

		DocumentPicker.show({
			filetype: [DocumentPickerUtil.allFiles()],
		}, (error, res) => {
			// Android
			if (res)
				console.log(
					res.uri,
					res.type, // mime type
					res.fileName,
					res.fileSize
				);
			this.moveFile(res.uri);
		});
	}

	moveFile(url: string) {

		const destPath = RNFS.DocumentDirectoryPath + '/.meteo/test.his';
		var path = RNFS.ExternalDirectoryPath + '/test.txt';

		// write the file
		RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
			.then((success) => {
				console.log('FILE WRITTEN!');
			})
			.catch((err) => {
				console.log(err.message);
			});
		// console.log("ULTRA ULTRA ULTRA BIEN", destPath);
		// RNFS.moveFile(url, destPath)
		// 	.then((success) => {
		// 		console.log('file moved!', success);
		// 	})
		// 	.catch((err) => {
		// 		console.log("Error: " + err.message);
		// 	})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>App meteo!</Text>
				<Text style={styles.instructions}>
					test
				</Text>
				<Button title="Upload File" onPress={this.TryUploadFile} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
