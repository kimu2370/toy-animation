let card = document.querySelector('.card');
let front = document.querySelector('.card__face--front');
let back = document.querySelector('.card__face--back');

card.addEventListener('click', function () {
	card.classList.toggle('is-flipped');
});

front.addEventListener('click', function () {
	back.classList.remove('back-flipped');
	front.classList.remove('front-opacity');

	front.classList.add('front-flipped');
	back.classList.add('back-opacity');
});

back.addEventListener('click', function () {
	front.classList.remove('front-flipped');
	back.classList.remove('back-opacity');

	back.classList.add('back-flipped');
	front.classList.add('front-opacity');
});

// card.addEventListener("transitionstart", () => {
//     console.log("transition start");
// });
// card.ontransitionend = e => {
//     console.log(e);
// };
// card.addEventListener("transitionend", () => {
//     console.log("transition end");
// });
