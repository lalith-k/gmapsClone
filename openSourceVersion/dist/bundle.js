/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("// import maplibregl from 'maplibre-gl';\r\n\r\nnavigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy: true})\r\n\r\nfunction successLocation(position) {\r\n console.log(position)\r\n setupMap([position.coords.longitude,position.coords.latitude ]);\r\n}\r\n\r\nfunction errorLocation(position) {\r\n setupMap([-2.24, 53.48])\r\n}\r\n\r\nfunction setupMap(center){\r\nconst map = new maplibregl.Map({\r\n    container: 'map',\r\n    style:\r\n        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',\r\n    center: [77.5733936,13.0679315],\r\n    zoom: 15,\r\n    attributionControl: false\r\n});\r\n\r\n}\r\n\r\n\r\n// [map.on(\"load\" , () => {\r\n//     const directions = new MapLibreGlDirections(map);\r\n//     directions.interactive = true;\r\n    \r\n//     map.addControl(new LoadingIndicatorControl(directions));\r\n\r\n//     directions.setWaypoints([\r\n//         [-73.8271025, 40.8032906],\r\n//         [-73.8671258, 40.82234996],\r\n//       ]);\r\n\r\n     \r\n\r\n//     //   directions.removeWaypoint(0);\r\n\r\n//     //   // Add waypoints\r\n//     //   directions.addWaypoint([-73.8671258, 40.82234996], 0);\r\n    \r\n//     //   // Remove everything plugin-related from the map\r\n//     //   directions.clear();\r\n// })\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;