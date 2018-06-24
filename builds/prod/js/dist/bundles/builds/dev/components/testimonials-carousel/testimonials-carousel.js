/*builds/dev/components/testimonials-carousel/testimonials-carousel.stache!steal-stache@3.0.5#steal-stache*/
define("builds/dev/components/testimonials-carousel/testimonials-carousel.stache!steal-stache@3.0.5#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.6#can-view-import","can-stache-bindings@3.0.19#can-stache-bindings"],function(e,t,a){var s=t([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["container"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["testimonials-carousel multi-column"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n\r\n        "]},{tokenType:"comment",args:[" Iterate through the list of icons "]},{tokenType:"special",args:["#each ./testimonialsList"]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["flex-item multi-column"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["img",!0]},{tokenType:"attrStart",args:["src"]},{tokenType:"special",args:["./image"]},{tokenType:"attrEnd",args:["src"]},{tokenType:"end",args:["img",!0]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["h3",!1]},{tokenType:"end",args:["h3",!1]},{tokenType:"special",args:["./name"]},{tokenType:"close",args:["h3"]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["p",!1]},{tokenType:"end",args:["p",!1]},{tokenType:"special",args:["./text"]},{tokenType:"close",args:["p"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"close",args:["div"]},{tokenType:"special",args:["/each"]},{tokenType:"chars",args:["\r\n\r\n    "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["div"]},{tokenType:"done",args:[]}]);return function(t,r,n){var o={module:e};return r instanceof a.Options||(r=new a.Options(r||{})),s(t,r.add(o),n)}});
/*builds/dev/components/testimonials-carousel/testimonials-carousel*/
define("builds/dev/components/testimonials-carousel/testimonials-carousel",["exports","../../js/utils/constants.js","./testimonials-carousel.stache","slick-carousel","slick-carousel/slick/slick.less","./testimonials-carousel.less"],function(s,e,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(s){$(s).append((0,l.default)({testimonialsList:e.TESTIMONIALS_LIST})),$($(s).children(1).children(1)).slick({mobileFirst:!0,dots:!0,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:768,settings:"unslick"}]})};var l=function(s){return s&&s.__esModule?s:{default:s}}(i)});