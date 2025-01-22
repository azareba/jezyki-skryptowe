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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import './style.css';\n\nvar form = document.getElementById('form');\nvar n = document.getElementById('n');\nfunction sitoErasto(liczba) {\n  //tworzenie listy od 2 do n\n  // const liczbyPierwsze = new Array(liczba).fill().map((e,i)=>i+1)\n  var liczbyPierwsze = new Array(liczba + 1).fill(); //[1,...,n]\n  liczbyPierwsze[0] = liczbyPierwsze[1] = false;\n  for (var i = 2; i * i <= liczba; i++) {\n    if (liczbyPierwsze[i]) {\n      for (var j = i * i; j <= liczba; j += i) {\n        liczbyPierwsze[j] = false;\n      }\n    }\n  }\n  return liczbyPierwsze.map(function (isPrime, index) {\n    return isPrime ? index : null;\n  }).filter(function (num) {\n    return num !== null;\n  });\n}\nconsole.log(sitoErasto(5));\nform.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var liczba = parseFloat(n.value);\n  if (isNaN(liczba) || liczba < 2) {\n    alert('Proszę podać liczbę całkowitą większą lub równą 2.');\n    return;\n  }\n  var liczbyPierwszeDoN = sitoErasto(liczba);\n  var wynikElement = document.getElementById('wynik');\n  wynikElement.textContent = \"Liczby pierwsze do \".concat(liczba, \": \").concat(liczbyPierwszeDoN);\n});\n\n// const component = () => {\n//   const element = document.createElement('div');\n//   element.innerHTML = sitoErasto(n.value);\n//   element.classList.add('hello');\n//   return element;\n// };\n\n// document.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;