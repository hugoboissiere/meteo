import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Dimensions } from "react-native"
import Highcharts from "highcharts"
import { styles } from "./styles"
import * as ctrl from "./controller"
import ChartView from "react-native-highcharts"
import { getProps } from "../../services/meteo-prop-services";

export interface AppProps {
	fileName: string
	propName: string
}

export interface States {
	min: number[]
	max: number[]
	avg: number[]
	avgMax: number[]
	avgMin: number[]
	avgDay: number[]
	hours: string[]
}

export class GraphBasicLine extends Component<AppProps, States> {
	constructor(props: AppProps) {
		super(props)
		const fileName = this.props.fileName
		const propName = this.props.propName
		this.state = {
			min: [],
			max: [],
			avg: [],
			avgMax: [],
			avgMin: [],
			avgDay: [],
			hours: []
		}
	}

	componentDidMount() {
		getProps('CREATEDATE', this.props.fileName).then(hours => {
			getProps(this.props.propName, this.props.fileName).then((res) => {
				this.setState({
					avgMin: [parseFloat(res[0])],
					avgMax: [0]
				})
				let tmpArray = []
				for (let i = 0; i < res.length; i++) {
					const value = parseFloat(res[i])
					tmpArray.push(value)
					if (value > this.state.avgMax[0]) {
						this.setState({ avgMax: [value] })
					}
					if (value < this.state.avgMin[0]) {
						this.setState({ avgMin: [value] })
					}
					if (i % 6 === 0) {
						const mi = this.state.min
						const ma = this.state.max
						const av = this.state.avg

						mi.push(Math.min.apply(Math, tmpArray))
						ma.push(Math.max.apply(Math, tmpArray))
						let sum = 0
						for (let j = 0; j < tmpArray.length; j++) {
							sum += tmpArray[j]
						}
						av.push(sum / tmpArray.length)

						this.setState({
							min: mi,
							max: ma,
							avg: av
						})
						tmpArray = []
					}
				}

				const avgMaxTmp: number[] = []
				const avgMinTmp: number[] = []
				for (let i = 0; i < 24; i++) {
					avgMaxTmp.push(this.state.avgMax[0])
					avgMinTmp.push(this.state.avgMin[0])
				}
				this.setState({
					avgMax: avgMaxTmp,
					avgMin: avgMinTmp
				})
			})
		})
	}

	render() {
		const Highcharts = "Highcharts"
		const conf = {
			chart: {
				type: "line",
				marginRight: 10
			},
			title: {
				text: this.props.propName
			},
			yAxis: {
				title: {
					text: "Valeur"
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
					pointStart: 0
				}
			},
			series: [
				{
					name: "maxDay",
					data: this.state.avgMax
				},
				{
					name: "minDay",
					data: this.state.avgMin
				},
				{
					name: "max",
					data: this.state.max
				},
				{
					name: "min",
					data: this.state.min
				},
				{
					name: "avg",
					data: this.state.avg
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
