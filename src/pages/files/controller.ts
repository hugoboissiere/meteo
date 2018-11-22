import * as RNFS from "react-native-fs"
import { NavigationScreenProp } from 'react-navigation'

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
				fileName = !fileName? "" : fileName
				files.push({name: fileName, path: elem.path})
			})

			resolve(files)
		})
	})
}

export function goToFile(path: string, nav: NavigationScreenProp<{}>){
	nav.navigate('GraphBasic', { fileName: path })
}