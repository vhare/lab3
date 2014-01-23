'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("just clicked!");
		$(".jumbotron p").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);
	function projectClick(e) {
		e.preventDefault();
		var projectTitle = $(this).find("p").text();
		var jumbotronHeader = $('.jumbotron h1');
		jumbotronHeader.text(projectTitle);
		var containingProject = $(this).closest(".project"); 
    	var description = $(containingProject).find(".project-description");
    	if (description.length == 0) { 
       		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    	} else { 
       		$(description).fadeOut();
    	}
    }
    $("#submitBtn").click(updateProject); 
    function updateProject(e) {
   		var id = $('#project').val();
   		$(id).animate({
      		width: $('#width').val()
   		});

   		var newText = $('#description').val();
  		 $(id + " .project-description").text(newText);
 }	

}

