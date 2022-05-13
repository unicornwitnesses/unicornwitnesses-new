const cards = Array.from(document.querySelectorAll('.avatars__item'));
const props = {
	perspective: '500px',
	delta: 10,
	cardWidth: cards[0].clientWidth,
	cardHeight: cards[0].clientHeight,
};

const midWidth = props.cardWidth / 2;
const midHeight = props.cardHeight / 2;

for (const card of cards) {
	card.addEventListener('mousemove', mouseOverCard);
	card.addEventListener('mouseleave', mouseLeftCard);
}

function mouseOverCard(e) {
	const cursorX = e.pageX - this.offsetLeft;
	const cursorY = e.pageY - this.offsetTop;
	const cursCenterX = midWidth - cursorX;
	const cursCenterY = midHeight - cursorY;

	// Fallback for <=IE11
	// this.style.cssText += `transform: perspective(${props.perspective}) rotateX(${cursCenterY / props.delta}deg) rotateY(${-cursCenterX / props.delta}deg)`;

	Object.assign(this.style, {
		transform: `perspective(${props.perspective}) rotateX(${
			cursCenterY / props.delta
		}deg) rotateY(${-cursCenterX / props.delta}deg)`,
	});
	this.classList.remove('mouse-out');
}
function mouseLeftCard() {
	this.classList.add('mouse-out');
}
