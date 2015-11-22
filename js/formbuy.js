var formBuy = document.getElementById('form-buy');
var anchors = document.getElementById('anchors');

document.getElementById('buy').onclick = function() {
	formBuy.style.cssText="display: block;";
	anchors.style.cssText="display: none";
};

document.getElementById('quit').onclick = function() {
	formBuy.style.cssText="display: none";
	anchors.style.cssText="display: block";
}
buyers = 1;
p = document.getElementById('req-number');
p.innerHTML = buyers;
function addBuyer() {
	p.innerHTML = ++buyers;
}

function checkIssues() {
	var issues = document.forms.issues;

	document.getElementById('issue').onclick = function() {
		if (issues.nick.value == "") {
			alert("Напишите ваше имя");
			return;
		} 
		if (issues.phone.value == "") {
			alert("Напишите ваш телефон");
			return;
		}
		addBuyer();
		alert("Спасибо! Ваша заявка принята!")
		formBuy.style.cssText="display: none";
	}
};