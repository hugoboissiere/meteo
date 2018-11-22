import React, { Component } from "react"
import { Text, View } from "react-native"
import { styles } from "./styles"
import UploadButton from "../../components/upload-button/index"
import { NavigationStackScreenOptions , NavigationScreenProp } from "react-navigation"

export interface HomeProps {
	navigation: NavigationScreenProp<{}>
}

export class HomeScreen extends Component<HomeProps> {
	constructor(props: HomeProps) {
		super(props)
	}
	static navigationOptions: NavigationStackScreenOptions = {
		title: 'Welcome',
	}
	render() {
		return (
			<View style={styles.contentContainer}>
				<Text style={styles.welcome}>App meteo!</Text>
				<Text style={styles.instructions} >
					Upload file
					</Text>
				<UploadButton />
			</View>
		)
	}
}
