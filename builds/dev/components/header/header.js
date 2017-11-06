/**
 * Header Component
 */

"use strict";


// Load dependencies
import $ from "jquery";
import {SITE_NAME} from "../../js/utils/constants.js";  // Don't forget the curly braces!


// Import stache template
import template from "./header.stache";


// Get current page to set it as active
let currentUrl =  location.pathname.substring(location.pathname.lastIndexOf("/") + 1);


// Array of page links. Add new items to the menu nav here!
let HREF_ARRAY = [
   "page1",
   "page2",
   "page3",
   "contact"
];


// Array of link objects used in the stache template
export const MAIN_NAV = [];


// Iterate through href array and create an object for each link
for( let i = 0, length = HREF_ARRAY.length; i <= length; i++) {

    MAIN_NAV.push( {
        title: HREF_ARRAY[i],
        href: HREF_ARRAY[i] + ".html",
        class: (currentUrl === HREF_ARRAY[i] + ".html") ? "active" : "nope"
    });

}


// Append the stache template to the page
$("#site-header").append(template({ siteName: SITE_NAME, navItems: MAIN_NAV }));


// Hamburger Menu Handler
$('#navbar-toggle').click(function(){
    $(this).toggleClass('open');
    $("#navigation-list").toggleClass('open');
});