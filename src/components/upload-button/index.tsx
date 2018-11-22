import React, { Component } from "react"
import { Button } from "react-native"
import { styles } from "./styles"
import * as ctrl from "./controller"
import { withNavigation, NavigationScreenProp } from 'react-navigation'

export interface UploadButtonProps {
	navigation: NavigationScreenProp<any, any>
 }

export class UploadButton extends Component<UploadButtonProps> {
	constructor(props: UploadButtonProps){
		super(props)
	}

	render() {
		return (
				<Button title="Upload File" onPress={() => ctrl.uploadFile(this.props.navigation)} />
		)
	}
}

export default withNavigation(UploadButton)
