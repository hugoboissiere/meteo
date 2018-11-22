import React, { Component } from "react"
import { View } from "react-native"
import { styles } from "./styles"
import { GraphBasicLine } from "../../components/graph-basic-line"
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
export class GraphBasicScreen extends Component<AppProps> {
	render() {
		// return <NavigationApp/>
		return (
			<View style={styles.contentContainer}>
				{/* <Text style={styles.welcome}>App meteo!</Text>
					<Text style={styles.instructions}>
						test
					</Text>
					<UploadButton /> */}
				<GraphBasicLine />
				{/* <GraphBasicLine /> */}
			</View>
		)
	}
}
