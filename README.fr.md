# Hexconverter

## Utilisation

Cette extension convertit instantanément des chiffres dans différents format : décimal, binaire, octal, hexadécimal, base 256 et ASCII.

Si la valeur hexadécimale correspond à une couleur, cette couleur est affichée au format RGB décimal et un indicateur affiche le rendu de la couleur. Si il existe une couleur HTML correspondante, son nom est affiché.

Il est possible d'ouvrir le convertisseur dans une fenêtre séparée.

En cas de fermeture de la fenêtre, les données entrées restent visibles lors de l'utilisation suivante.

Page de l'extension : [https://addons.mozilla.org/firefox/addon/hexconverter/](https://addons.mozilla.org/firefox/addon/hexconverter/)

## Développement

Le Javascript est réalisée avec [React](https://reactjs.org) et est dans un bundle créé grâce à [Webpack](https://webpack.js.org).

Installer d'abord les dépendances:

`npm install`

Les fichiers source Javascript et LESS sont dans le dossier `src`. Les fichiers générés sont dans le dossier `addon`. Il contient les fichiers destinés à l'extension de Firefox. Ce dossier n'est pas présent sur le dépôt Git, son contenu est généré par les commandes `npm run build` et `npm run publish`.

Les fichiers générés sont :
* `app.js`
* `style.css` 
* `index.html`
* `manifest.json`

Pour lancer les tests unitaires :

`npm test`

Pour construire les fichiers Javascript et CSS et générer les images et le manifeste :

`npm run build`

Pour créer les archives qui contiennent le code de l'addon et le code source :

`npm run publish`

Pour démarrer le serveur :

`npm start`

Le package pour l'addon est fait à partir du dosser `addon`, il contient les fichiers statiques, le manifest et l'HTML.

## Langues

La documentation en anglais est [ici](README.md).
