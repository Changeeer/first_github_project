/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

define([],function(){function a(a){var b;for(b=0;b<a.length;b+=1)a[b](j)}function b(){var b=k;i&&b.length&&(k=[],a(b))}function c(){i||(i=!0,g&&clearInterval(g),b())}function d(a){return i?a(j):k.push(a),d}var e,f,g,h=typeof window!="undefined"&&window.document,i=!h,j=h?document:null,k=[];if(h){if(document.addEventListener)document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1);else if(window.attachEvent){window.attachEvent("onload",c),f=document.createElement("div");try{e=window.frameElement===null}catch(l){}f.doScroll&&e&&window.external&&(g=setInterval(function(){try{f.doScroll(),c()}catch(a){}},30))}document.readyState==="complete"&&c()}return d.version="2.0.1",d.load=function(a,b,c,e){e.isBuild?c(null):d(c)},d})