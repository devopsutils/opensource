!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.gibon=n()}(this,function(){"use strict";function t(t,e,r,o){function i(t){t=function(){return u(window.location.pathname)},t(),window.addEventListener("onpopstate",t),window.onclick=function(t){return r(t,u)}}function u(t,n){return t="string"==typeof t?f(t):t,o=e(t,n||{},o)}function f(e){return e=e||"/",window.history.pushState(0,0,e),n(t,e)}return e=e||function(t,n){return t(n)},r=r||function(t,n){if(!(t.metaKey||t.shiftKey||t.ctrlKey||t.altKey)){for(var e=t.target;e&&"a"!==e.localName;)e=e.parentNode;n=window.location,e&&e.host===n.host&&!e.hasAttribute("data-no-routing")&&(u(e.pathname),t.preventDefault())}},{start:i,render:u}}function n(t,n,r){if("function"==typeof t)return t;if(t[n])return t[n];for(var o in t)if(r=e(o),r.regex.test(n)){var i={};if(n.replace(r.regex,function(t){t=arguments;for(var n=1;n<t.length-2;n++)i[r.keys.shift()]=t[n];r.match=1}),r.match)return function(n,e){return e=e||i,t[o](n,e,i)}}}function e(t,n){var e=[];return n="^"+t.replace(/\//g,"\\/").replace(/:(\w+)/g,function(t,n){return e.push(n),"(\\w+)"})+"$",{regex:new RegExp(n,"i"),keys:e}}return t});
//# sourceMappingURL=gibon.umd.js.map
