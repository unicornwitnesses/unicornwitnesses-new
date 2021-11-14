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

const expandBlock = () => {
	const textBlocks = document.querySelectorAll('.text-block__view-btn');
	textBlocks.forEach((el) => {
		el.addEventListener('click', (ev) => {
			const speachText = ev.target.parentNode.querySelector('.text-block__speach');
			speachText.classList.toggle('expand');
			speachText.classList.contains('expand')
				? (el.innerText = 'Показать меньше')
				: (el.innerText = 'Показать больше');
		});
	});
};

document.addEventListener('DOMContentLoaded', init_burger);
document.addEventListener('DOMContentLoaded', expandBlock);
