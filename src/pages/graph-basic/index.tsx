import React, { Component } from "react"
import { View, Text } from "react-native"
import { styles } from "./styles"
import { GraphBasicLine } from "../../components/graph-basic-line"
import { NavigationStackScreenOptions, NavigationScreenProp } from "react-navigation"

export interface AppProps {
	navigation: NavigationScreenProp<any, any>
	fileName: string
	propName:string
}

export class GraphBasicScreen extends Component<AppProps> {
	constructor(props: AppProps) {
		super(props)
		this.props.navigation.getParam('fileName')
	}

	static navigationOptions: NavigationStackScreenOptions = {
		title: 'graph',
	}

	render() {
		return (
			<View style={styles.contentContainer}>
				<GraphBasicLine fileName={this.props.navigation.getParam('fileName')} propName={this.props.navigation.getParam('propName')}/>
			</View>
		)
	}
}
