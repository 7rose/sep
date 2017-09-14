// kris
function shutSubMenu(pos) {

	var position = "#" + pos;
	//var sub_menus = $("#menu-classic");
	//sub_menus.hide();
	window.location.hash = position;
	location.reload();
}