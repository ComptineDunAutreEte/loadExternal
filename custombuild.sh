#!/bin/sh
ng build angular-app --prod --output-hashing=none && cat dist/angular-app/runtime.js dist/angular-app/polyfills.js dist/angular-app/scripts.js dist/angular-app/main.js > preview/angularapp.js
