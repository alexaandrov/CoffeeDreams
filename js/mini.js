var anchorBtn = document.getElementById('anchor-btn');
var anchorsMenu = document.getElementById('anchors');
var anchorCheck = false;

var menuBtn = document.getElementById('menu-btn');
var mainMiniMenu = document.getElementById('main-mini-menu')
var menuCheck = false;

function menuCheckOpenClose() {
	if (menuCheck === false && anchorCheck === true) {
		mainMiniMenu.style.cssText="left: 150px;";
		anchorsMenu.style.cssText="right: -150px;";
		menuCheck = true;
		anchorCheck = false;
	}
	if (menuCheck === true) {
		mainMiniMenu.style.cssText="left: -150px;";
		menuCheck = false;
	}
	else {
		mainMiniMenu.style.cssText="left: 150px;";
		menuCheck = true;
	};
};

function anchorCheckOpenClose() {
	if (menuCheck === true && anchorCheck === false) {
		anchorsMenu.style.cssText="right: 150px;";
		anchorCheck = true;
		mainMiniMenu.style.cssText="left: -150px;";
		menuCheck = false;
	}
	if (anchorCheck === true) {
		anchorsMenu.style.cssText="right: -150px;";
		anchorCheck = false;
	}
	else {
		anchorsMenu.style.cssText="right: 150px;";
		anchorCheck = true;
	};
};

anchorBtn.onclick = function() {
	anchorCheckOpenClose(mainMiniMenu, menuCheck, "left: -150px;", "left: 150px;");
};

menuBtn.onclick = function() {
	menuCheckOpenClose();
};

// DON'T WORK
// function checkOpenClose(menu, check, arg1, arg2) {
// 	if (check === true) {
// 		menu.style.cssText=arg1;
// 		check = false;
// 	}
// 	else {
// 		menu.style.cssText=arg2;
// 		check = true;
// 	};
// };
// anchorBtn.onclick = function() {
// 	checkOpenClose(mainMiniMenu, menuCheck, "left: -150px;", "left: 150px;");
// };

// menuBtn.onclick = function() {
// 	checkOpenClose(mainMiniMenu, menuCheck, "left: -150px;", "left: 150px;");
// };