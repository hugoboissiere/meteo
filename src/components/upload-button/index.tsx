import React, { Component } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"
import { styles } from "./styles"
import * as ctrl from "./controller"

export interface AppProps { }

export class UploadButton extends Component<AppProps> {

	render() {
		return (
				<Button title="Upload File" onPress={ctrl.tryUploadFile} />
		)
	}
}
