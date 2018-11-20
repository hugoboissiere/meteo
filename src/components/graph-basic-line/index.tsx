import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Highcharts from "highcharts";
import { styles } from "./styles";
import * as ctrl from "./controller";
import ChartView from "react-native-highcharts";

export interface AppProps { }

export class GraphBasicLine extends Component<AppProps> {
	render() {
		var Highcharts = "Highcharts";
		var conf = {
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
				},
				{
					name: "Manufacturing",
					data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
				},
				{
					name: "Sales & Distribution",
					data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
				},
				{
					name: "Project Development",
					data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
				},
				{
					name: "Other",
					data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
				}
			]
		};

		const options = {
			global: {
				useUTC: false
			},
			lang: {
				decimalPoint: ",",
				thousandsSep: "."
			}
		};

		return (
			<View>
				<Text>Chart</Text>
				<ChartView
					style={{height: 35, width: 150, flex: 1 }}
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
