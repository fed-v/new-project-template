/**
 * Icon Carousel Component
 *
 * Uses: https://kenwheeler.github.io/slick/
 *
 */

"use strict";

// Fetch the list of company icons that will be used
import {ICONS_LIST} from "../../js/utils/constants.js";  // Don't forget the curly braces!
import slick  from "slick-carousel";
import "slick-carousel/slick/slick.less";

// Import stache template
import template from "./icon-carousel.stache";


export default function(selector) {

    // Embed template to the site
    $(selector).append(template({ iconsList: ICONS_LIST }));

    // Get the first child element and set it as a carousel
    $(selector).children(0).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        // Override the default arrow buttons
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg class="" role="img" title="Next"><use xlink:href="http://localhost:3000/images/icons.svg#sleekArrow"/></svg></button>',
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg class="" role="img" title="Previous"><use xlink:href="http://localhost:3000/images/icons.svg#sleekArrow"/></svg></button>',

        //autoplay: true,
        //autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

}