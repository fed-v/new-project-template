/*builds/dev/components/bottom-cta/bottom-cta.stache!steal-stache@3.0.5#steal-stache*/
define("builds/dev/components/bottom-cta/bottom-cta.stache!steal-stache@3.0.5#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.6#can-view-import","can-stache-bindings@3.0.19#can-stache-bindings"],function(t,e,a){var r=e([{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["form",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["cta-input-wrapper"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["form",!1]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["input",!0]},{tokenType:"attrStart",args:["id"]},{tokenType:"attrValue",args:["cta-input"]},{tokenType:"attrEnd",args:["id"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["cta-input"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["type"]},{tokenType:"attrValue",args:["text"]},{tokenType:"attrEnd",args:["type"]},{tokenType:"attrStart",args:["placeholder"]},{tokenType:"attrValue",args:["Find the perfect domain name"]},{tokenType:"attrEnd",args:["placeholder"]},{tokenType:"end",args:["input",!0]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"close",args:["form"]},{tokenType:"chars",args:["\r\n\r\n    "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["id"]},{tokenType:"attrValue",args:["cta-button"]},{tokenType:"attrEnd",args:["id"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["button"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"chars",args:["CHECK AVAILABILITY"]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\r\n\r\n"]},{tokenType:"done",args:[]}]);return function(e,n,s){var o={module:t};return n instanceof a.Options||(n=new a.Options(n||{})),r(e,n.add(o),s)}});
/*builds/dev/components/bottom-cta/bottom-cta*/
define("builds/dev/components/bottom-cta/bottom-cta",["jquery","./bottom-cta.stache"],function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=n(t),c=n(e);window.onload=function(){var t=document.getElementById("cta-button"),e=document.getElementById("cta-input"),n=document.getElementById("cta-wrapper");window.addEventListener("scroll",function t(){o.handleScroll(),this.removeEventListener("scroll",t)}),t.addEventListener("click",function(){o.handleClick()}),e.addEventListener("keyup",function(t){o.handleKeyStroke(t.keyCode)});var o={handleScroll:function(){n.style.bottom="0"},handleKeyStroke:function(t){13===t&&this._redirect()},handleClick:function(){this._redirect()},handleFocus:function(){n.style.position="absolute",window.scrollTo(0,230)},handleBlur:function(){n.style.position="fixed",this._redirect()},_redirect:function(){var t=document.getElementById("cta-input").value;t&&(window.location="https://www.hover.com/domains/results?q="+encodeURIComponent(t))}}},(0,o.default)("#cta-wrapper").append((0,c.default)())});