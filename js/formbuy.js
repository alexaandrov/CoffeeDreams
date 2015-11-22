document.getElementById('buy').onclick = function() {
	var formBuy = document.getElementById('form-buy');
	formBuy.style.cssText="display: block;";
	var anchors = document.getElementById('anchors');
	anchors.style.cssText="display: none";
};

document.getElementById('quit').onclick = function() {
	var formBuy = document.getElementById('form-buy');
	formBuy.style.cssText="display: none";
	var anchors = document.getElementById('anchors');
	anchors.style.cssText="display: block";
}

var buyers = 0;
	document.getElementById('issue').onclick = function() {
		
		var p = document.getElementById('req-number');
		p.innerHTML = buyers;
		console.log(buyers);
		buyers = buyers + 1;
	}