/**
 * Header Component
 *
 * Styles: ../../less/layout/header.less
 *
 */

"use strict";


// Load dependencies
import $ from "jquery";
import {SITE_NAME} from "../../js/utils/constants.js";  // Don't forget the curly braces!


// Import stache template
import template from "./header.stache";


// Get current page to set it as active
let currentUrl =  location.pathname.substring(location.pathname.lastIndexOf("/") + 1);


// Array of link objects used in the stache template
export const MAIN_NAV = [
    {
        title: "Page 1",
        href: "page1.html"
    },
    {
        title: "Page 2",
        href: "page2.html"
    },
    {
        title: "Page 3",
        href: "page3.html"
    },
    {
        title: "Contact Us",
        href: "contact.html"
    },
    {
        title: "About Us",
        href: "about.html"
    }
];


// Iterate through the links object and the class based on current page to set active link
for ( let link of MAIN_NAV) {
    link.class = (currentUrl === link.href) ? "active" : "nope";
}


// Append the stache template to the page
$("#site-header").append(template({ siteName: SITE_NAME, navItems: MAIN_NAV }));


// Hamburger Menu Handler
$('#navbar-toggle').click(function(){
    $(this).toggleClass('open');
    $("#navigation-list").toggleClass('open');
});