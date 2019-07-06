# gulp-filterpath

[![NPM](https://nodei.co/npm/gulp-filterpath.png)](https://nodei.co/npm/gulp-filterpath/)

[![Build Status](https://travis-ci.org/mvandrew/gulp-filterpath.svg?branch=master)](https://travis-ci.org/mvandrew/gulp-filterpath) 
![](https://img.shields.io/npm/v/gulp-filterpath.svg?label=npm%20package&style=flat)
[![Dependencies](https://img.shields.io/david/mvandrew/gulp-filterpath.svg)](https://david-dm.org/mvandrew/gulp-filterpath)

Corrects the relative path error for the Gulp watch task.

## Install

**npm**: 
```
$ npm install --save-dev gulp-filterpath
```
**yarn**:
```
yarn add -D gulp-filterpath
```

## Usage

```javascript
const path = require("path");
const filterPath = require("gulp-filterpath");

const config = {
    src: "./theme/src",
    dist: "./theme/assets",
};

const correct_path = filterPath(__dirname, path.resolve(config.src, "js/**/*.js"));
```

## Parameters

* ```root_path``` - The project root path.
* ```target_path``` - Full path to files.
