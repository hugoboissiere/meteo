import React, { Component } from "react"
import { View } from "react-native"
import { GraphBasicScreen } from "./pages/graph-basic/index"
import { HomeScreen } from "./pages/home/index"
import { createStackNavigator, createNavigationContainer } from 'react-navigation'

export const AppNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	GraphBasic: { screen: GraphBasicScreen },
})

export const AppContainer = createNavigationContainer(AppNavigator)

export class App extends React.Component {
	render() {
		return <AppContainer />
	}
}
