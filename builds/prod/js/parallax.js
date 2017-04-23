(function(){
	
	"use strict";
	
	var nodeList = document.getElementsByClassName("parallax"),
		nodeListLength = nodeList.length,
        speed = 0.5;

    window.onscroll = function(){
		
		var windowYOffset = window.pageYOffset,
			newBackgroundPosition = "0 " + (windowYOffset * speed) + "px";
		
		for(var i = 0; i < nodeListLength; i++ ){
			nodeList[i].style.backgroundPosition = newBackgroundPosition;
		}
		
    };
	
})();