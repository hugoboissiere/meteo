import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Dimensions } from "react-native"
import Highcharts from "highcharts"
import { styles } from "./styles"
import * as ctrl from "./controller"
import ChartView from "react-native-highcharts"
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
import { getPropsName, getProps } from "../../services/meteo-prop-services";
import { NavigationScreenProp } from "react-navigation";

export interface AppProps { 
	navigation: NavigationScreenProp<any, any>,
	fileName: string
}

export interface States {
	tableHead: String[];
	tableData: String[][];
}

export class TableClass extends Component<AppProps, States> {
  constructor(props: AppProps) {
		super(props);
		console.warn(this.props.navigation.getParam('fileName'))
		

		this.state = {
      tableHead: ['Nom de l\'analyse', 'Min', 'Heure du min', 'Moyenne de la journée', 'Max', 'Heure du max'],
      tableData: [
        ['AIR_TEMPERATURE', '2', '3', '4', '4', '2015-03-01 13:00:05'],
        ['1', '2', '3', '4', '4', '2015-03-01 13:00:05'],
        ['1', '2', '3', '4', '4', '2015-03-01 13:00:05'],
        ['1', '2', '3', '4', '4', '2015-03-01 13:00:05'],
        ['1', '2', '3', '4', '4', '2015-03-01 13:00:05'],
        ['1', '2', '3', '4', '4', '2015-03-01 13:00:05'],
      ]
		}
		// getProps("AIR_TEMPERATURE", )
  }
 
  render() {
    const state = this.state;
    return (
      <View style={epic.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={epic.head} textStyle={epic.text}/>
          <Rows data={state.tableData} textStyle={epic.text}/>
        </Table>
      </View>
    )
  }
}

const width = Dimensions.get('window').width //full width

const epic = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', width: width },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});