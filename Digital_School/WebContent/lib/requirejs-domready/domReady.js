/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

define([],function(){function h(a){var b;for(b=0;b<a.length;b+=1)a[b](f)}function i(){var a=g;e&&a.length&&(g=[],h(a))}function j(){e||(e=!0,c&&clearInterval(c),i())}function l(a){return e?a(f):g.push(a),l}var a,b,c,d=typeof window!="undefined"&&window.document,e=!d,f=d?document:null,g=[];if(d){if(document.addEventListener)document.addEventListener("DOMContentLoaded",j,!1),window.addEventListener("load",j,!1);else if(window.attachEvent){window.attachEvent("onload",j),b=document.createElement("div");try{a=window.frameElement===null}catch(k){}b.doScroll&&a&&window.external&&(c=setInterval(function(){try{b.doScroll(),j()}catch(a){}},30))}document.readyState==="complete"&&j()}return l.version="2.0.1",l.load=function(a,b,c,d){d.isBuild?c(null):l(c)},l})