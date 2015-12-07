$(function() {
	function checkIssues(login, email, text) {
		if (login == "") {
			alert("Напишите ваше имя");
			return;
		} 
		if (email == "") {
			alert("Напишите ваш email");
			return;
		}
		var emailValid = /^\w+@\w+\.\w{2,4}$/i;
		if (!emailValid.test(email)) {
			alert("Email введен некорректно");
			return;
		}
		return true;
	}

	var btn = $('.send-form');
	btn.click(function(e) {
		e.preventDefault();
		
		var login = $('.login').val();
		var email = $('.email').val();
		var text = $('.textare').val();
		if(checkIssues(login, email, text)) {
			$.ajax({
				'url': 'http://requests.xyzslash.ru/form_data/',
				'type': 'POST',
				'data': {
				  'login': login,
				  'emai': email,
				  'text': text
				},
				success: function() {
					alert("Спасибо " + login + "!" + " Ваше сообщение принято!")
					formBuy.style.cssText="display: none";
				},
				error: function() {
					alert("Ошибка при отправке данных");
				}
			});
		}
	});
});