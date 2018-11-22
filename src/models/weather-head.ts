import { ObjectSchema } from "realm"

export class WeatherHead {
	public static schema: ObjectSchema = {
		name: 'WeatherHead',
		properties: {
			name: 'string'
		}
	}

	public name?: string
}