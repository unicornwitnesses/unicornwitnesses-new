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

document.addEventListener('DOMContentLoaded', expandBlock);
