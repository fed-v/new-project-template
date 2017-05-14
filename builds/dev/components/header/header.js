/**
 * Header Component
 */

"use strict";

// Load dependencies
import $ from "jquery";
import {SITE_NAME} from "../../js/utils/constants.js";  // Don't forget the curly braces!

// Import stache template
import template from "./header.stache";

// Main navigation array
export const MAIN_NAV = [
    {
        title: "link_1",
        href: "index.html"
    },
    {
        title: "link_2",
        href: "index2.html"
    },
    {
        title: "link_3",
        href: "index3.html"
    },
    {
        title: "contact",
        href: "contact.html"
    }
];

// Get current page to set it as active
let currentUrl = "contact.html";

// Append the stache template to the page
$("#site-header").append(template({ siteName: SITE_NAME, navItems: MAIN_NAV, currentUrl: currentUrl }));

// Hamburger Menu Handler
$('#navbar-toggle').click(function(){
    $(this).toggleClass('open');
    $("#navigation-list").toggleClass('open');
});