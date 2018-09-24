# Hexconverter

Cette extension convertit instantanément des chiffres dans différents format : décimal, binaire, octal, hexadécimal et en base 256.

Si la valeur hexadécimale correspond à une couleur, cette couleur est affichée au format RGB décimal et un indicateur affiche le rendu de la couleur. Si il existe une couleur HTML correspondante, son nom est affiché.

Il est possible d'ouvrir le convertisseur dans une fenêtre séparée pour éviter de perdre les données entrées.

Page de l'extension : [https://addons.mozilla.org/firefox/addon/hexconverter/](https://addons.mozilla.org/firefox/addon/hexconverter/)

# Développement

Le Javascript est dans un bundle créé grâce à [Webpack](https://webpack.js.org).

Installer d'abord les dépendances:

`npm install`

Pour compiler le fichier Javascript pour le développement :

`npm run js`

Pour construire le fichier CSS :

`npm run js`

Pour lancer les tests unitaires :

`npm test`

Pour construire les fichiers Javascript et CSS et lancer les tests unitaires :

`npm run build`

Les fichiers source Javascript et LESS sont dans le dossier `src`. Les fichiers générés sont dans le dossier `build`. Il y a 2 fichiers générés : `hexc.js` et `hexc.css`.

Le package pour l'addon est fait à partir du dosser `build`, il contient les fichiers statiques, le manifest et l'HTML.