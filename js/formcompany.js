$(function() {
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

	var btn = $('.send-form');
	btn.click(function(e) {
		e.preventDefault();
		
		var name = $('.name').val();
		var phone = $('.phone').val();
		if(checkIssues(name, phone)) {
			$.ajax({
				'url': 'http://requests.xyzslash.ru/form_data/',
				'type': 'POST',
				'data': {
				  'name': name,
				  'phone': phone
				},
				success: function() {
					addBuyer();
					alert("Спасибо " + name + "!" + " Ваша заявка принята!")
					formBuy.style.cssText="display: none";
				},
				error: function() {
					alert("Ошибка при отправке данных");
				}
			});
		}
	});
});