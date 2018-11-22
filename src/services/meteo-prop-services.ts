import { open } from "realm"
import { WeatherProp } from "../models/weather-prop"
import { WeatherHead } from "../models/weather-head"

export function getProps(prop: string) {
	open({ schema: [WeatherProp.schema] }).then(realm => {
		return realm.objects('WeatherProp').filtered('propName == ' + prop)
	})
}

export function getPropsName() {
	open({ schema: [WeatherHead.schema] }).then(realm => {
		return realm.objects('WeatherHead')
	})
}
