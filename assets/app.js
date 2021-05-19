(function() {
	"use strict";

	// Add Scripts Here

	function showStats(event) {
		//Get the menu & detail button text elements
		var statsMenu = document.getElementById("expanded-stats")
		var detailbuttonText = detailButton.getElementsByTagName("span")
		var detailButtonArrow = detailButton.getElementsByTagName("i")
		
		statsMenu.classList.toggle("hidden")
		detailButtonArrow[0].classList.toggle("fa-angle-down")
		detailButtonArrow[0].classList.toggle("fa-angle-up")
		
		//update expand text
		if(statsMenu.classList.contains("hidden")) {
			detailbuttonText[0].textContent = "Hide Details"
		} else {
			
			detailbuttonText[0].textContent = "Show Details"
		}

	}


	function showMobileMenu(event) {
		//get relevant elements
		var mobileMenu = document.getElementById("mobile-menu")
		var mobileMenuIcon = mobileMenu.getElementsByTagName("i")
		var mobileMenuExpand = mobileMenu.getElementsByTagName("nav")

		//Toggle classes for hidden and arrow icon
		mobileMenuIcon[0].classList.toggle("fa-angle-down")
		mobileMenuIcon[0].classList.toggle("fa-angle-up")
		mobileMenuExpand[0].classList.toggle("hidden")


	}

	//Expand Details Event Listeiner
	var detailButton = document.getElementById("detail-button")
	detailButton.addEventListener('click', showStats, false)

	var mobileMenuButton = document.getElementById("mobile-menu-button")
	mobileMenuButton.addEventListener('click', showMobileMenu, false)
    	
})();