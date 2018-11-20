import { ObjectSchema } from "realm"

export class WeatherProp {
	public static schema: ObjectSchema = {
		name: 'WeatherProp',
		properties: {
			propName: 'string',
			propValue: 'string',
			date: 'string'
		}
	}

	public propName?: string
	public propValue?: string
	public date?: string
}