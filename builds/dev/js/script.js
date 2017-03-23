//////////////////////////////////////////////////////
// Create a scope sandbox for initialization code by using an immediate function
//////////////////////////////////////////////////////
( function($) {

    'use strict';

    // Style Console Messages: "%c" tells the console that the rest of the message should be formatted
    // using CSS. You can pass the CSS styles as a parameter.
    var consoleStyles = "color: orange; font-weight: bold; margin-left: 20px";
    console.log("%c Console with styles added to it.", consoleStyles);

    $(document).ready(function(){
        setCopyrightDate();
        setListeners();
    });

}) (jQuery); // End of use strict


//////////////////////////////////////////////////////
// Set all the event listeners
//////////////////////////////////////////////////////
function setListeners() {
    (function($){

        // Hamburger Menu Handler
        $('#navbar-toggle').click(function(){
            $(this).toggleClass('open');
            $("#navigation-list").toggleClass('open');
        });

    })(jQuery);
}


//////////////////////////////////////////////////////
// Dynamicaly Set Copyright Date in Footer
//////////////////////////////////////////////////////
function setCopyrightDate(){
    (function($){

        // Create Instance of the Date Object
        var date = new Date();

        // Extract Four Digit Year and Add to Footer
        $("#copyright").text(date.getFullYear());

    })(jQuery);
}

