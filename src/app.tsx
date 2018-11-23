import React, { Component } from "react"
import { View } from "react-native"
import { GraphBasicScreen } from "./pages/graph-basic/index"
import { HomeScreen } from "./pages/home/index"
import { FileListScreen } from "./pages/files/index"
import { createStackNavigator, createNavigationContainer } from 'react-navigation'
import { PropsScreen } from './pages/prop-select/index'
import { TableScreen} from './pages/table/index'

export const AppNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	GraphBasic: { screen: GraphBasicScreen },
	Files: {screen: FileListScreen},
	Props: {screen:  PropsScreen},
	Table: {screen: TableScreen}
})

export const AppContainer = createNavigationContainer(AppNavigator)

export class App extends React.Component {
	render() {
		return <AppContainer />
	}
}
