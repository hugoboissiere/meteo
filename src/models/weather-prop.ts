import { ObjectSchema } from "realm"

export class WeatherProp {
	public static schema: ObjectSchema = {
		name: 'WeatherProp',
		properties: {
			props: 'string[]'
		}
	}

	public props?: string[]
}