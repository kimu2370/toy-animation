// https://screenlane.com/screen/zola-ios-app-2b6/

const boxs = document.querySelectorAll('.box');
const text = document.querySelectorAll('.box > div');

(() => {
	function fadeOut() {
		boxs.forEach((x) => {
			!x.className.includes('active') && x.classList.add('fade-out');
		});
	}

	function handleFullScreen(event, x, i) {
		let absoluteTop = window.pageYOffset + x.getBoundingClientRect().top; // 절대 경로
		let absoluteLeft = x.getBoundingClientRect().left; // 절대 경로
		x.style.left = absoluteLeft + 'px';
		x.style.top = absoluteTop + 'px';

		const toggleActive = x.classList.toggle('active');
		if (toggleActive) {
			// active
			x.style.pointerEvents = 'none'; // animation 중 클릭 막기
			fadeOut();
			text[i].classList.add('fade-in');
		} else {
			// inactive
			boxs.forEach((x) => {
				x.className.includes('fade-out') && x.classList.remove('fade-out');
			});
			text[i].classList.remove('fade-in');
		}
		x.addEventListener('animationend', () => {
			x.style.pointerEvents = 'auto'; // animation 끝나면 클릭 풀기
		});
		console.log(x.style.pointerEvents);
	}
	boxs.forEach((x, i) => {
		x.addEventListener('click', (e) => handleFullScreen(e, x, i));
	});
})();
