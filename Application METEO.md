# Application METEO

## Documentation développeur

### Components

####  - graph-basic-line

##### Class : GraphBasicLine

`render()` : fonction qui va nous dire quel layout le component va rendre sur la page 

- `const Highcharts` : importation d'highcharts dans une variable
- `const conf` :  configuration de base du graphique
- `const options` : options supplémentaires pour le graphique
- `const width` : on récupère la largeur de l'écran pour que le graphique prenne toute la place

####  - upload-button

##### Class : UploadButton

`render()` : fonction qui va nous dire quel layout le component va rendre sur la page 

- `uploadFile()` : Fonction permettant de sélectionner un fichier sur son téléphone, de le déplacer et d'importer ses données dans la base de données.

### Models

####  - weather-heads

##### Class : WeatherHead
Schema permettant d'avoir le nom de toutes les propriétés. On l'utilise principalement pour afficher le nom de celles-ci, cela nous permet de ne pas récupérer toutes les données ainsi. (= optimisation)
###### properties : 
- `name` : nom de la propriété

####  - weather-prop

##### Class : WeatherProp
Schema permettant d'avoir les valeurs de chaque propriété.
###### properties : 
- `propName` : nom de la propriété
-  `props` : liste des différentes valeurs 

### Pages

####  - graph-basic

##### Class : GraphBasicScreen

- `render()` : fonction qui va nous dire quel layout le component va rendre sur la page 

####  - home

##### Class : HomeScreen

- `render()` : fonction qui va nous dire quel layout le component va rendre sur la page 

### Services

####  - meteo-prop-services

- `getProps()` : Fonction permettant de récupérer toutes les valeurs d'une propriété à partir de son nom 
- `getProps()` : Fonction permettant de récupérer les noms de toutes les propriétés

 
####  - home

##### Class : HomeScreen

- `render()` : fonction qui va nous dire quel layout le component va rendre sur la page 

# Diagramme cas d'utilisation

![alt text](https://cdn.discordapp.com/attachments/515283670584786945/515301077042593819/unknown.png "Diagramme")

