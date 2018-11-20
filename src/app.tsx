import React, { Component } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"
import { styles } from "./styles"
import { UploadButton } from "./components/upload-button/index"
export interface AppProps { }

export class App extends Component<AppProps> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>App meteo!</Text>
				<Text style={styles.instructions}>
					test
				</Text>
				<UploadButton/>
			</View>
		)
	}
}
