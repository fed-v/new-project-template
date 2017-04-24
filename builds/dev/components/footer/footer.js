// Import dependencies
import $ from "jquery";

// Import stache template
import template from "./footer.stache";

// Set current year to be passed as argument to the template
const currentYear = new Date().getFullYear();

// Embed template to the site  TODO: This isn't working!
$("#site-footer").append(template({ year: currentYear }));