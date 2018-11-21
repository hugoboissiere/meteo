import React, { Component } from "react"
import { StyleSheet, Text, View, Button, ScrollView } from "react-native"
import { DocumentPicker, DocumentPickerUtil, Result } from 'react-native-document-picker'
import * as RNFS from "react-native-fs"
import { styles } from "./styles"
import { UploadButton } from "./components/upload-button/index"
import { GraphBasicLine } from "./components/graph-basic-line";
import { GraphLineTime } from "./components/graph-time-line";
// import { StackNavigator } from "react-navigation";

export interface AppProps { }

// class HomeScreen extends React.Component {
// 	render() {
// 		const { navigate } = this.props.navigation
// 	}
// }

// const NavigationApp = StackNavigator({
// 	Home: { screen: HomeScreen},
// 	Graph: { screen: GraphScreen}
// })
export class App extends Component<AppProps> {

	render() {
		// return <NavigationApp/>
		return (
			<ScrollView>
				<View style={styles.contentContainer}>
					{/* <Text style={styles.welcome}>App meteo!</Text>
					<Text style={styles.instructions}>
						test
					</Text>
					<UploadButton /> */}
					<GraphBasicLine />
					{/* <GraphBasicLine /> */}
				</View>
			</ScrollView>
		)
	}
}
