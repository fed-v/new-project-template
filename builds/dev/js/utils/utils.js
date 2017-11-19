/**
 * Utility functions
 *
 *  Use "export" for these helper functions to be available to the components that imports them.
 *
 */

"use strict";

export let adder = function(value) {

	return value + 20;

}


export let isMobile = function() {

}

/**
 * Method which returns the current page you are on.
 *
 * @function getPage
 * @returns {string} the name of the current page
 *
 **/
export let getPage = function() {

	// Get current filename
	let fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

	// Return the current filename without it's extension
	return fileName.replace(/\.[^/.]+$/, "");

}