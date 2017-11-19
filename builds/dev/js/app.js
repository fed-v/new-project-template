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

// Load utility functions
import {getPage} from 'builds/dev/js/utils/utils.js';


let updatePage = function(){

    switch(getPage()) {

        case "about" : // Do nothing for now
                            break;

        case "contact" : steal.import("builds/dev/components/map/map").then(function(moduleOrPlugin){

                                var plugin = typeof moduleOrPlugin === "function" ?
                                    moduleOrPlugin : moduleOrPlugin["default"];
                                plugin("map-container");

                            });
                            break;

        // Homepage!
        case ""             : steal.import("builds/dev/components/icon-carousel/icon-carousel").then(function(moduleOrPlugin){

                                var plugin = typeof moduleOrPlugin === "function" ?
                                    moduleOrPlugin : moduleOrPlugin["default"];
                                plugin("#carousel");

                            });
                            break;
    }

};

$(window).on('hashchange', updatePage);

updatePage();
