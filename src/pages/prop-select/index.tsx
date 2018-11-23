import React, { Component } from "react"
import { FlatList, Text, View } from "react-native"
import { styles } from "./styles"
import { getFiles, FileItem, goToTab, deleteFile } from "./controller"
import { NavigationStackScreenOptions, NavigationScreenProp } from "react-navigation"
import { WeatherHead } from "../../models/weather-head"
import { getPropsName } from "../../services/meteo-prop-services"

export interface Props {
	navigation: NavigationScreenProp<any, any>
	fileName: string
}

export interface States {
	props: WeatherHead[]
}

export class PropsScreen extends Component<Props, States> {
	static navigationOptions: NavigationStackScreenOptions = {
		title: 'Props',
	}

	constructor(props: Props) {
		super(props)
		this.state = { props: []}
		this.props.navigation.getParam('fileName')
	}

	componentDidMount() {
		getPropsName().then((res) => {
			this.setState({
				props: res
			})
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.props}
					renderItem={({ item }) =>
							<Text style={styles.item} onPress={() => goToTab(item.name, this.props.navigation)}>{item.name}</Text>
					}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		)
	}
}
