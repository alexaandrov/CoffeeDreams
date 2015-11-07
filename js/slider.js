var slider = {
	slides:['./img/top/slider/1.jpg','./img/top/slider/2.jpg','./img/top/slider/3.jpg','./img/top/slider/4.jpg','./img/top/slider/5.jpg'],
	frame:0, // текущий кадр для отбражения - индекс картинки из массива
	set: function(image) { // установка нужного фона слайдеру
		document.getElementById("scr").style.backgroundImage = "url("+image+")";
	},
	init: function() { // запуск слайдера с картинкой с нулевым индексом
		this.set(this.slides[this.frame]);
	},
	left: function() { // крутим на один кадр влево
		this.frame--;
		if(this.frame < 0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);
	},
	right: function() { // крутим на один кадр вправо
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);		
	},
	navigation: function(number) {
		switch (number) {
			case 0: 
				this.frame = 0; 
				this.set(this.slides[this.frame]);
				break;
			case 1: 
				this.frame = 1; 
				this.set(this.slides[this.frame]);
				break;
			case 2: 
				this.frame = 2; 
				this.set(this.slides[this.frame]);
				break;
			case 3: 
				this.frame = 3; 
				this.set(this.slides[this.frame]);
				break;
			case 4: 
				this.frame = 4; 
				this.set(this.slides[this.frame]);
				break;
		}
	}
};
window.onload = function() { // запуск слайдера после загрузки документа
	var durationSlide = 9000;
	slider.init();
	setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
		slider.right();
	}, durationSlide);
};
