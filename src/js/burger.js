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
	});
};

document.addEventListener('DOMContentLoaded', init_burger);
