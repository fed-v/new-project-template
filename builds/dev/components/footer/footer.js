/**
 * Footer Component
 *
 * Styles: ../../less/layout/footer.less
 *
 */


// Import dependencies
import $ from "jquery";
import {SOCIAL_MEDIA} from "../../js/utils/constants.js";  // Don't forget the curly braces!

// Import stache template
import template from "./footer.stache";

// Set current year to be passed as argument to the template
const currentYear = new Date().getFullYear();

// Embed template to the site
$("#site-footer").append(template({ year: currentYear, socialMedia: SOCIAL_MEDIA }));