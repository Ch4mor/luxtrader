//-----------------потрібні змінні--------------------
let region = document.querySelector('.header__region');
let currency = document.querySelector('.header__currency');
let search = document.querySelector('.header__search');
let userIcon = document.querySelector('.header__user');
let actionList = document.querySelector('.header__action-list');
let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let header = document.querySelector('.header');
let regProps = document.querySelector('.header__region-properties');
// ---------------------------------------------------


//--------------------burger-menu---------------------
burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	document.querySelector('body').classList.toggle('locked');
});
// ---------------------------------------------------


//-------------кнопка вибору регіона--------------
region.addEventListener('click', () => {
	region.classList.toggle('not-active');
	regProps.classList.toggle('active');
});
//-------------------------------------------------


//----------------header drop-menu-----------------
userIcon.addEventListener('click', () => {
	actionList.classList.toggle('active');
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('.header__user')) {
		actionList.classList.remove('active');
	}
});

actionList.addEventListener('click', () => {
	actionList.classList.toggle('active');
});
// ---------------------------------------------------


//----------------image background--------------------
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
// ---------------------------------------------------


//--------------------------main-slider----------------------
let mainSlider = new Swiper('.main-slider__body', {
	navigation: {
		nextEl: '.main-slider__next',
		prevEl: '.main-slider__prev',
	},

	autoHeight: true,

	loop: true,
});
// ---------------------------------------------------


//--------------------------lots-slider----------------------
let lotsSlider = new Swiper('.lots-slider__body', {
	navigation: {
		nextEl: '.lots-slider__next',
		prevEl: '.lots-slider__prev',
	},

	autoHeight: true,

	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		550: {
			slidesPerView: 2,
		},

		820: {
			slidesPerView: 3,
		},

		968: {
			slidesPerView: 3,
			spaceBetween: 100,
		},
	},
});
// ---------------------------------------------------


//--------------------------quote-slider----------------------
let quoteSlider = new Swiper('.quote-slider__body', {
	navigation: {
		nextEl: '.quote-slider__next',
	},

	autoHeight: true,

	loop: true,

	effect: 'fade',

	fadeEffect: {
		//Зміна прозорості
		crossFade: true,
	},
});
// ---------------------------------------------------