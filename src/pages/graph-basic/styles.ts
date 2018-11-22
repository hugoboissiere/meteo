import { StyleSheet, Dimensions } from "react-native"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF",
		height: Dimensions.get('window').height
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	},
	contentContainer: {
		paddingVertical: 20,
		height: Dimensions.get('window').height,
		justifyContent: "center",
		alignItems: "center",
	}
})
