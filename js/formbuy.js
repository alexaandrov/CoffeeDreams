	var formBuy = document.getElementById('form-buy');
	var anchors = document.getElementById('anchors');
	document.getElementById('buy').onclick = function() {
		formBuy.style.cssText="display: block;";
		anchors.style.cssText="display: none";
	}
	document.getElementById('quit').onclick = function() {
		formBuy.style.cssText="display: none";
		anchors.style.cssText="display: block";
	}

$(function () {
	var buyers = 1;
	var p = document.getElementById('req-number');
	p.innerHTML = buyers;
	function addBuyer() {
		p.innerHTML = ++buyers;
	}
	function checkIssues(name, phone) {
		if (name == "") {
			alert("Напишите ваше имя");
			return;
		} 
		if (phone == "") {
			alert("Напишите ваш телефон");
			return;
		}
		if (phone / 1 > 1 === false) {
			alert("Номер телефона введен не корректно");
			return;
		}
		if (phone.length < 10)
		{
			alert("Телефон не должен быть < 10 цифр");
			return;
		}
		return true;
	}

	var btn = $('.sumbit-form-buy');
		btn.click(function(e) {
		e.preventDefault();
		var name = $('.name').val();
		var phone = $('.phone').val();
		if(checkIssues(name, phone))
		{
			$.ajax({
				'url': 'http://requests.xyzslash.ru/form_data/',
				'type': 'POST',
				'data': {
				  'name': name,
				  'phone': phone
				},
				success: function() {
					addBuyer();
					alert("Спасибо " + name + "!" + " Наш оператор перезвонит вам в течение 1 минуты.");
					formBuy.style.cssText="display: none";
					$('.name').val('');
					$('.phone').val('');
				},
				error: function() {
					alert("Ошибка при отправке данных");
				}
			});
		}
	});

});