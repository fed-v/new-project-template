/**
 *
 *	This script is for the CTA found fixed at the bottom of the individual post pages.
 *	It takes a user input and redirects to hover.com/shop to search for that domain.
 *
 *  Styles: ../../less/components/bottom-cta.less
 *
 */

'use strict';

// Import dependencies
import $ from "jquery";  // Isn't jQuery a global dependency?

// Import stache template
import template from "./bottom-cta.stache";

window.onload = function(){


    /**
     *
     *	Fetch DOM elements
     *
     */
    var ctaButton = document.getElementById("cta-button"),
        ctaInput  = document.getElementById("cta-input"),
        ctaWrapper  = document.getElementById("cta-wrapper");


    /**
     *
     *	Atach Event Listeners
     *
     *	* Scroll event uses a named function in order to reference it when removing the listener as
     *	  I only want this event to be fired once.
     *
     */
    window.addEventListener("scroll" , function scrollEventhandler(){
        ctaApplication.handleScroll();
        this.removeEventListener('scroll', scrollEventhandler);
    });

    ctaButton.addEventListener("click", function(){
        ctaApplication.handleClick();
    });

    ctaInput.addEventListener("keyup", function (event){
        ctaApplication.handleKeyStroke(event.keyCode);
    });


    /**
     *
     *	Create object that handles events
     *
     */
    var ctaApplication = {

        /**
         *
         *	The CTA is positioned outside the page initially. Once the user scrolls, the CTA is given a position bottom 0 so that it is placed
         *	at the very bottom of the screen. Animation is given by CSS transitions.
         *
         */
        handleScroll: function() {
            ctaWrapper.style.bottom = "0";
        },

        /**
         *
         *	Method that handles keystrokes. They key is passed by the event and if it is the enter key, then the form is submited
         *
         */
        handleKeyStroke: function(key) {
            if(key === 13){
                this._redirect();
            }
        },

        /**
         *
         *	Method that takes the value of the input element and redirects the page to Hover shop with the searched item attached.
         *
         */
        handleClick: function() {
            this._redirect();
        },

        /**
         *
         *	On focus event checks if it is an iphone device and then changes the CTA's position to absolute.
         *	This is done to avoid the IOS bug where the window scrolls to the bottom of the page when you
         *	focus an input placed in a fixed wrapper.
         *
         */
        handleFocus: function() {

            ctaWrapper.style.position = "absolute";
            window.scrollTo(0, 230);

        },

        /**
         *
         *	On blur event places the CTA wrapper back to it's fixed position and calls the method
         *	that redirects the page.
         *
         */
        handleBlur: function() {

            ctaWrapper.style.position = "fixed";
            this._redirect();

        },

        /**
         *
         *	Private method that takes the value of the input element and redirects the page to Hover shop with the searched item attached.
         *   Google Analytics string is added to the end of the URL for A/B testing different design options
         *
         */
        _redirect: function() {

            var ctaInputValue = document.getElementById("cta-input").value;
            if(ctaInputValue) {
                window.location = "https://www.hover.com/domains/results?q=" + encodeURIComponent(ctaInputValue);
            }

        }

    };

};

// Embed template to the site
$("#cta-wrapper").append(template());