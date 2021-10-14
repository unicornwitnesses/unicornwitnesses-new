const init_burger = () => {
	const BODY = document.body;
	const HEADER = document.querySelector('.header__body');
	const MENU_BTN = document.querySelector('.header__burger');
	const CONTENT = document.querySelector('.content');

	MENU_BTN.addEventListener('click', () => {
		BODY.classList.toggle('lock');
		HEADER.classList.toggle('active');
		CONTENT.classList.toggle('active');
		MENU_BTN.classList.toggle('active');

		if (window.screen.width <= 767) {
			if (CONTENT.classList.contains('active')) {
				CONTENT.style.display = 'grid';
				CONTENT.style.animation = 'moveWindowLeft 0.3s 1';
				CONTENT.style.left = '0';
			} else {
				CONTENT.style.animation = 'moveWindowRight 0.3s 1';

				setTimeout(() => {
					CONTENT.style.display = 'none';
				}, 300);
			}
		}

		if (window.screen.width <= 1024 && window.screen.width >= 768) {
			if (CONTENT.classList.contains('active')) {
				CONTENT.style.animation = 'moveWindowLeft 0.3s 1';
				setTimeout(() => {
					CONTENT.style.left = '0';
				}, 300);
			}
		}
	});
};

document.addEventListener('DOMContentLoaded', init_burger);
