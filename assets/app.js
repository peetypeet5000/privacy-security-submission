(function() {
	"use strict";

	// Add Scripts Here

	function showStats(event) {
		//Get the menu & detail button text elements
		var statsMenu = document.getElementById("expanded-stats")
		var detailbuttonText = detailButton.getElementsByTagName("span")
		
		//toggle hidden class and update expand text
		if(statsMenu.classList.contains("hidden")) {
			statsMenu.classList.remove("hidden")
			detailbuttonText[0].textContent = "Hide Details"
		} else {
			statsMenu.classList.add("hidden")
			detailbuttonText[0].textContent = "Show Details"
			
		}

	}

	//Expand Details Event Listeiner
	var detailButton = document.getElementById("detail-button")
	detailButton.addEventListener('click', showStats, false)
    	
})();