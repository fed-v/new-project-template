(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZHMvZGV2L2pzL3NjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBDcmVhdGUgYSBzY29wZSBzYW5kYm94IGZvciBpbml0aWFsaXphdGlvbiBjb2RlIGJ5IHVzaW5nIGFuIGltbWVkaWF0ZSBmdW5jdGlvblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuKCBmdW5jdGlvbigkKSB7XHJcblxyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIFN0eWxlIENvbnNvbGUgTWVzc2FnZXM6IFwiJWNcIiB0ZWxscyB0aGUgY29uc29sZSB0aGF0IHRoZSByZXN0IG9mIHRoZSBtZXNzYWdlIHNob3VsZCBiZSBmb3JtYXR0ZWRcclxuICAgIC8vIHVzaW5nIENTUy4gWW91IGNhbiBwYXNzIHRoZSBDU1Mgc3R5bGVzIGFzIGEgcGFyYW1ldGVyLlxyXG4gICAgdmFyIGNvbnNvbGVTdHlsZXMgPSBcImNvbG9yOiBvcmFuZ2U7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tbGVmdDogMjBweFwiO1xyXG4gICAgY29uc29sZS5sb2coXCIlYyBDb25zb2xlIHdpdGggc3R5bGVzIGFkZGVkIHRvIGl0LlwiLCBjb25zb2xlU3R5bGVzKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIHNldENvcHlyaWdodERhdGUoKTtcclxuICAgICAgICBzZXRMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG5cclxufSkgKGpRdWVyeSk7IC8vIEVuZCBvZiB1c2Ugc3RyaWN0XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFNldCBhbGwgdGhlIGV2ZW50IGxpc3RlbmVyc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0TGlzdGVuZXJzKCkge1xyXG4gICAgKGZ1bmN0aW9uKCQpe1xyXG5cclxuICAgICAgICAvLyBIYW1idXJnZXIgTWVudSBIYW5kbGVyXHJcbiAgICAgICAgJCgnI25hdmJhci10b2dnbGUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQoXCIjbmF2aWdhdGlvbi1saXN0XCIpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSkoalF1ZXJ5KTtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBEeW5hbWljYWx5IFNldCBDb3B5cmlnaHQgRGF0ZSBpbiBGb290ZXJcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENvcHlyaWdodERhdGUoKXtcclxuICAgIChmdW5jdGlvbigkKXtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIEluc3RhbmNlIG9mIHRoZSBEYXRlIE9iamVjdFxyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCBGb3VyIERpZ2l0IFllYXIgYW5kIEFkZCB0byBGb290ZXJcclxuICAgICAgICAkKFwiI2NvcHlyaWdodFwiKS50ZXh0KGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcblxyXG4gICAgfSkoalF1ZXJ5KTtcclxufVxyXG5cclxuIl19
