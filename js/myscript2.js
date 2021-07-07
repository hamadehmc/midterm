$(document).ready(function() {
	// get data from local storage
	part = JSON.parse(localStorage.getItem("part"));
	model = JSON.parse(localStorage.getItem("model"));
	tier_level = JSON.parse(localStorage.getItem("tier_level"));

	var lat = latArray[rowID];
	var lon = lngArray[rowID];	
	


	// ajax call
	$.ajax({
		type: "GET", url: "../dataFiles/midterm.json",
		dataType: "json",
		success: function (response) {
			$("#part").html();
			$("#model").html();
			$("#tier_level").html();
		}

	});
		 
	}); // end of document ready