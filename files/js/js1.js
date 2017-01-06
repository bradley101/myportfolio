function showTab(id) {
	var tab = document.getElementById(id);
	var tabcontainer = document.getElementById("tab-container");
	for (i = 0 ; i < tabcontainer.childNodes.length ; i += 1) {
		var t = tabcontainer.childNodes[i];
		if (t.nodeType == 1) {
			if (t == tab) {
				t.style.display = 'block';
			} else {
				t.style.display = 'none';
			}
		}
	}
	//$('html, body').animate({scrollTop: $("body").offset().top}, 1000);
}

//$(document).ready(function() {
//	alert("hello" + $('#about-start-1').offset().top);
//	$('html, body').animate({scrollTop: $("#about-start-1").offset().top}, 1000);
//});

function myScrollFunction(id) {
	$('html, body').animate({scrollTop: $("#" + id).offset().top}, 500);
}

