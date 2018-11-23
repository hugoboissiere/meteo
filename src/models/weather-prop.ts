import { ObjectSchema } from "realm"

export class WeatherProp {
	public static schema: ObjectSchema = {
		name: 'WeatherProp',
		properties: {
			propName: 'string',
			props: 'string[]',
			day: 'string'
		}
	}

	public propName?: string
	public props?: string[]
	public day?: string
}
