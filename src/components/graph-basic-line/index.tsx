import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Dimensions } from "react-native"
import Highcharts from "highcharts"
import { styles } from "./styles"
import * as ctrl from "./controller"
import ChartView from "react-native-highcharts"

export interface AppProps { }

export class GraphBasicLine extends Component<AppProps> {
	render() {
		const Highcharts = "Highcharts"
		const conf = {
			chart: {
				type: "line",
				marginRight: 10
			},
			title: {
				text: "Live random data"
			},
			yAxis: {
				title: {
					text: "Number of Employees"
				}
			},
			legend: {
				layout: "vertical",
				align: "right",
				verticalAlign: "middle"
			},
			exporting: {
				enabled: false
			},
			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					},
					pointStart: 2010
				}
			},
			series: [
				{
					name: "Installation",
					data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
				}
			]
		}

		const options = {
			global: {
				useUTC: false
			},
			lang: {
				decimalPoint: ",",
				thousandsSep: "."
			}
		};

		const width = Dimensions.get('window').width //full width
		const height = Dimensions.get('window').height / 300000 //half height

		return (
			<View>
				<Text>Chart</Text>
				<ChartView
					style={{
						height: height, width: width, flex: 1,
					}}
					config={conf}
					options={options}
					stock={true}
					originWhitelist={[""]}
					javaScriptEnabled={true}
					domStorageEnabled={true}
				/>
			</View>

		);
	}
}
