import { open } from "realm"
import { WeatherProp } from "../models/weather-prop"
import { WeatherHead } from "../models/weather-head"

export function getProps(propName: string, fileName: string) {
	return new Promise<WeatherProp[]>((resolve, reject) => {
		open({ schema: [WeatherProp.schema] }).then(realm => {
			const props = realm.objects<WeatherProp>('WeatherProp').filtered(`day == "${fileName}" && propName == "${propName}"`)
			const propList: WeatherProp[] = []
			props.forEach(elem => {
				propList.push({
					day: elem.day,
					propName: elem.propName,
					props: elem.props
				})
			})
			resolve(propList)
		})
	})
}

export function getPropsName() {
	return new Promise<WeatherHead[]>((resolve, reject) => {
		open({ schema: [WeatherHead.schema] }).then(realm => {
			const heads = realm.objects<WeatherHead>('WeatherHead')
			const headList: WeatherHead[] = []
			heads.forEach(elem => {
				headList.push({
					name: elem.name
				})
			})
			resolve(headList)
		})
	})
}
