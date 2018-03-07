$(document).ready(function() {
	
	var generalSearch;

	$('#submitButton').on("click", function(evt){
		evt.preventDefault();
		var searchTerm = $("#searchTerm").val();
		generalSearch = searchTerm;

		var queryURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3568e5ab7a1b4e5ba40c99af711d18e0&q='+ generalSearch;
	
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {
			console.log(response);
		});
	});

	


});//end doc ready