# Hexconverter

## Usage

This addon instantly converts numbers from and to different formats : decimal, binary, octal, hexadecimal, base 256 and ASCII.

If the hexadecimal value corresponds to a color, the corresponding color is displayed in RGB decimal format, and an indicator displays a preview of the color. If it corresponds to a HTML color, its name is displayed.

It is possible to display the converter in a separate window.

Converted data remains if the window is closed.

Addon page : [https://addons.mozilla.org/firefox/addon/hexconverter/](https://addons.mozilla.org/firefox/addon/hexconverter/)

## Build and development

The Javascript of the addon is built using [Webpack](https://webpack.js.org) and [React](https://reactjs.org).

Source files for Javascript and CSS are in the folder `src`. 
Files generated by build are in the `addon` folder. It contains the files for the Firefox addon. This folder is no longer present in the Git repository, it is fully generated by commands `npm run build` or `npm run publish`.

These files are generated:
* `img` folder: contains images
* `app.js`
* `style.css` 
* `index.html`
* `manifest.json`

First, install dependencies:

`npm install`

To launch unit tests:

`npm test`

To build Javascript and CSS files and generate images and manifests for production (addon and site):

`npm run build`

To create Zip files containing the addon code and source code:

`npm run publish`

To launch the server:

`npm start`

The package for the addon is made from folder `addon`, which contains static files, manifest and html.

## Languages

Documentation is also available in French [here](README.fr.md).
