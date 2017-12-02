/**
 * Feature Carousel Component
 *
 * Uses: https://kenwheeler.github.io/slick/
 *
 */

"use strict";

// Fetch the array of features that will be used
import {FEATURES_LIST} from "../../js/utils/constants.js";  // Don't forget the curly braces!
import slick  from "slick-carousel";
import "slick-carousel/slick/slick.less";

// Import stache template
import template from "./feature-carousel.stache";


export default function(selector) {

    // Embed template to the site
    $(selector).append(template({ featuresList: FEATURES_LIST }));

    // Find the 'features-carousel' child and set it to carousel
    $($(selector).children(1).children(1)).slick({
        mobileFirst: true,
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            }
        ]
    });

}