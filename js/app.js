    	$(document).ready(function(){
    		
    		/******
    			Add Class to Menu Toggle
    		*******/
			$('.toggle').click(function(){
				 addMenuClass();
			});
			
			/******
				Remove Class to Menu Toggle
			*******/
			$('.close').click(function(){
				 removeMenuClass();
			});

			/******
				IF larger than mobile breakpoint
				remove the active class from "nav"
			*******/
			$(window).resize(function(){
				var winWidth = $(window).width();
				if(winWidth > 736){
					removeMenuClass();	
				}
			});

			// Menu toggle function
    		function addMenuClass(){
    			$('nav').addClass('active');
    		}

    		// Menu toggle function
    		function removeMenuClass(){
    			$('nav').removeClass('active');
    		}
    	});
