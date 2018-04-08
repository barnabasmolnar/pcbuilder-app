# PC config builder app

This is an app that lets you build a custom PC config.

You may choose to build a full config or select only the parts you need.

For each component (CPU, RAM, etc) you can choose an item from a combobox.

This project is a **WIP** (work in progress).

## Techonologies used:
* React
* Redux (for state management)
* React select (3rd party library for combobox functionality: https://github.com/JedWatson/react-select)
* Boostrap 4 (Lumen Bootswatch theme)
* Node.js backend

## Currently available functionality:
* [x] pick components via a modal window
* [x] pick item for each component
* [x] combobox functionality that lets you input text and/or choose from a select list
* [x] autofill item price
* [x] save builds into a mongoDB database

## Planned functionality:
* [ ] currency conversion
* [ ] retrieve saved builds via unique URLs
* [ ] featured builds (=builds picked by random on landing page)

---

### Where do the PC parts come from?

The items for each component come from an arlista.json file in the process-product-list folder.
This json file contains all items for every available component.

The app.js file contains a short script that parses the json file and returns a formatted list of the items. For each component (CPU, RAM, etc), the script creates a separate json file containing the relevant items for its respective component.

Updating this product list would look a little something like this:
1. obtain a product list in either json or csv format
2. if in csv, use a public csv-to-json converter
3. run the script on the json file


---

### To run:
1. run client by chaning into pcbuilder-client directory and run npm start
2. change into pcbuilder-server directory
3. (optional) change mongoDB credentials in pcbuild.js
4. run node app.js