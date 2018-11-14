import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export interface AppProps {
}

export class App extends Component<AppProps> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>App meteo!</Text>
				<Text style={styles.instructions}>To get started, edit src/app.tsx</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
})
