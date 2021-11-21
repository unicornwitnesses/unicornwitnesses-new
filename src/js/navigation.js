window.onload = function () {
	let currentNav;
	const sections = document.querySelectorAll('.hide');
	const navs = document.querySelectorAll('.menu__link');

	window.addEventListener('scroll', () => {
		sections.forEach((section) => {
			let positionOfSection = section.offsetTop;

			if (window.pageYOffset + window.innerHeight > positionOfSection) {
				show(section);

				//animation of nav-links
				// 	navs.forEach((nav) => {
				// 		if (nav.getAttribute('href').replace('#', '') === section.id) {
				// 			nav.style.color = '#3d60f4';
				// 			nav.style.fontSize = '1.2rem';
				// 			nav.style.fontWeight = '900';
				// 		} else {
				// 			nav.style.color = '#585b60';
				// 			nav.style.fontSize = '1.1rem';
				// 		}
				// 	});
			}

			// if (window.pageYOffset === 0) {
			// 	navs[0].style.color = '#585b60';
			// 	navs[0].style.fontSize = '1.1rem';
			// }
		});
	});

	function show(e) {
		if (e.classList.contains('hide')) {
			e.classList.remove('hide');
			e.classList.add('show');
			return;
		}

		if (e.classList.contains('show')) {
			return;
		}
	}
};

function scroll(element) {
	const nav = document
		.querySelector('.navigation')
		.getBoundingClientRect().height;

	window.scrollTo({
		top: element.offsetTop - nav,
		behavior: 'smooth',
	});
}
