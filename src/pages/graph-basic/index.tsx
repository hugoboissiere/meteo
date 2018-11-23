import React, { Component } from "react"
import { View, Text } from "react-native"
import { styles } from "./styles"
import { GraphBasicLine } from "../../components/graph-basic-line"
import { NavigationStackScreenOptions, NavigationScreenProp } from "react-navigation"
import { TableClass } from "../../components/table";

export interface AppProps {
	navigation: NavigationScreenProp<any, any>
	fileName: string
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
				<TableClass />
			</View>
		)
	}
}
