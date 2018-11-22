import React, { Component } from "react"
import { View } from "react-native"
import { styles } from "./styles"
import { GraphBasicLine } from "../../components/graph-basic-line"

export interface AppProps { }

export class GraphBasicScreen extends Component<AppProps> {
	render() {
		return (
			<View style={styles.contentContainer}>
				<GraphBasicLine />
			</View>
		)
	}
}
