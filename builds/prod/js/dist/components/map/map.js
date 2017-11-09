/**
 * Map Component
 */

//import GoogleMapsLoader  from "../../utils/Google.min.js";  //If I want gmaps out of app.js

import {COMPANY_ADDRESS} from "../../utils/constants.js";  // Don't forget the curly braces!
import GoogleMapsLoader  from "google-maps";

// Set API key
GoogleMapsLoader.KEY = 'AIzaSyBD1LtBORL5IyarV0COsUULBcUZ5YDPpLk';

// Load Google map with custom marker
GoogleMapsLoader.load(function(google) {

    let myLatLng = {lat: COMPANY_ADDRESS.latitude, lng: COMPANY_ADDRESS.longitud};
    let markerIcon = '/images/map-marker.png';

    // ID of map container should be passed as a parameter!
    let map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        center: myLatLng,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        streetViewControl: false,
        draggable: true,

        // Style Source: https://snazzymaps.com/
        styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
    });

    let marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Headquarters',
        icon: markerIcon
    });

});