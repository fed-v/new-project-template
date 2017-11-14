/**
 * Main entry point of the application
 */

"use strict";

// Load dependencies
import 'jquery';
import 'svg4everybody';
import 'retinajs';


// Load components the will be used across the entire site
import "../components/header/header";
import "../components/footer/footer";


let updatePage = function(){

    let currentUrl =  location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

    switch(currentUrl) {

        case "about.html" : // Do nothing for now
                            break;

        case "contact.html" : steal.import("builds/dev/components/map/map").then(function(moduleOrPlugin){

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

$(window).on("hashchange", updatePage);

updatePage();
