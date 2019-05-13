(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function run(num1, num2) {
    return num1 + num2;
}

window.x = run(5, 10);

})));
