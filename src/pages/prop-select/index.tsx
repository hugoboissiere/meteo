import React, { Component } from "react"
import { FlatList, Text, View, Button } from "react-native"
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
		this.state = { props: [] }
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
				<Button
					title="Voir le tableau"
					onPress={() => {
						this.props.navigation.navigate('Table', {	fileName: this.props.navigation.getParam('fileName') })
					}}
				/>
				<FlatList
					style={{ flex: 3 }}
					data={this.state.props}
					renderItem={({ item }) =>
						<Text style={styles.item} onPress={() => goToTab(this.props.navigation.getParam('fileName'), item.name, this.props.navigation)}>{item.name}</Text>
					}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		)
	}
}
