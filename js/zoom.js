function show(obj) {
	if (document.getElementById(obj).style.display == 'none') document.getElementById(obj).style.display = 'block';
	else document.getElementById(obj).style.display = 'none';
}
function show_feedback(obj) {
	if (document.getElementById(obj).style.display == 'none')  {
		document.getElementById(obj).style.display = 'block';
		document.getElementById("small_photo").style.display = 'none';
	}
	else {
		document.getElementById(obj).style.display = 'none';
		document.getElementById("small_photo").style.display = 'block';
	}
}
