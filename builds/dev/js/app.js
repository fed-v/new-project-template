/**
 * Main entry point of the application
 */

'use strict';

// Load dependencies
import 'jquery';
import 'svg4everybody';
import 'retinajs';

// Load components the will be used across the entire site
import '../components/header/header';
import '../components/footer/footer';
import '../components/scroll-to-top/scroll-to-top';


// Load utility functions
import {getPage} from 'builds/dev/js/utils/utils.js';


let updatePage = function(){

    switch(getPage()) {

        case "about" : steal.import("builds/dev/components/icon-carousel/icon-carousel").then(function(moduleOrPlugin){

                                let plugin = typeof moduleOrPlugin === "function" ? moduleOrPlugin : moduleOrPlugin["default"];
                                plugin("#carousel");
                            });
                            break;

        case "contact" : steal.import("builds/dev/components/map/map").then(function(moduleOrPlugin){

                                let plugin = typeof moduleOrPlugin === "function" ? moduleOrPlugin : moduleOrPlugin["default"];
                                plugin("map-container");
                            });
                            break;

        // Homepage!
        case ""             : steal.import("builds/dev/components/testimonials-carousel/testimonials-carousel").then(function(moduleOrPlugin){

                                let plugin = typeof moduleOrPlugin === "function" ? moduleOrPlugin : moduleOrPlugin["default"];
                                plugin("#testimonials");

                            });
                            steal.import("builds/dev/components/feature-carousel/feature-carousel").then(function(moduleOrPlugin){

                                let plugin = typeof moduleOrPlugin === "function" ? moduleOrPlugin : moduleOrPlugin["default"];
                                plugin("#features");

                            });
                            break;
    }

};

$(window).on('hashchange', updatePage);

updatePage();
