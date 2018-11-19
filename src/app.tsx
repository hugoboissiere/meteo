import React, { Component } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"
export interface AppProps { }

export class App extends Component<AppProps> {

	TryUploadFile = () => {

		DocumentPicker.show({
			filetype: [DocumentPickerUtil.allFiles()],
		}, (error, res) => {
			// Android
			if (error)
				return
			this.moveFile(res.uri)
		})
	}

	moveFile(url: string) {

		const path = RNFS.ExternalDirectoryPath + '/test.txt'

		RNFS.moveFile(url, path).then(() => {

		})
			.catch((err) => {
				console.warn("Error: " + err.message)
			})
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
		)
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
})
