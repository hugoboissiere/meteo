import * as RNFS from "react-native-fs"
import { NavigationScreenProp } from 'react-navigation'
import { WeatherProp } from "../../models/weather-prop"
import { open } from "realm"

export interface FileItem {
	name: string
	path: string
}

export function getFiles() {
	return new Promise<FileItem[]>((resolve, reject) => {
		RNFS.readDir(RNFS.ExternalDirectoryPath).then(result => {
			if (!result)
				reject([])

			const files: FileItem[] = []
			result.forEach(elem => {
				let fileName = elem.name.replace(/\.[^/.]+$/, "")
				fileName = !fileName ? "" : fileName
				files.push({ name: fileName, path: elem.path })
			})

			resolve(files)
		})
	})
}

export function goToTab(path?: string, nav?: NavigationScreenProp<{}>) {
	if (nav)
		nav.navigate('GraphBasic', { fileName: path })
}

export function deleteFile(path: string, name: string) {
	RNFS.unlink(path).then(res => {
		open({ schema: [WeatherProp.schema] }).then(realm => {
			const props = realm.objects<WeatherProp>('WeatherProp').filtered(`day == "${name}"`)
			realm.delete(props)
		})
	})
}
