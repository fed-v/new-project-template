/**
 * Scroll to top component
 */

"use strict";

import $ from "jquery";

// Create the scroll button
let scroll_btn = '<button id="scroll_btn" class="scroll_btn"><svg class="icon" role="img" title="arrow"><use xlink:href="images/icons.svg#sleekArrow"/></svg></button>';

// Add the scroll button to the DOM
$("#site-footer").append(scroll_btn);


// Display or hide the scroll button
$(window).scroll(function() {

    // Y position where we want the scroll button to appear
    let offset = 500;

    // Display the scroll button when it hits the offset
    if ($(document).scrollTop() > offset) {
        $('#scroll_btn').fadeIn('slow', "swing");
    }else {
        $('#scroll_btn').fadeOut('slow', "swing");
    }

});


// Handle the button click to make the page scroll to the top of the window
$('#scroll_btn').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 500, "swing");
    return false;
});
