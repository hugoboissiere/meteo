import React, { Component } from "react"
import { FlatList, Text, View } from "react-native"
import { styles } from "./styles"
import { getFiles, FileItem, goToFile } from "./controller"
import { NavigationStackScreenOptions, NavigationScreenProp } from "react-navigation"

export interface Props {
	navigation: NavigationScreenProp<any, any>
}

export interface States {
	files: FileItem[]
}

export class FileListScreen extends Component<Props, States> {
	static navigationOptions: NavigationStackScreenOptions = {
		title: 'Fichiers',
	}

	constructor(props: Props) {
		super(props)
		this.state = { files: [] }
	}

	componentDidMount() {
		getFiles().then((res) => {
			this.setState({
				files: res
			})
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.files}
					renderItem={({ item }) => <Text style={styles.item} onPress={() => goToFile(item.name, this.props.navigation)}>{item.name}</Text>}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		)
	}
}
