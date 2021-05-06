let brush = 'F1';
let count = 0;
const cleanFlower = document.querySelector('#cleanit');
const result = document.querySelector('#result');
const phonekey = document.querySelector('.phonekey');

bgSwitcher();

window.addEventListener('keyup', (event) => {
	if (event.isComposing || event.keyCode === 229) return;
	if (Number(event.key) >= 1 && Number(event.key) <= 9) {
		brush = `F${event.key}`;
	}
	if (event.key === 'Backspace') {
		while (document.body.querySelector('.foo')) {
			document.body.querySelector('.foo').remove();
		}
		changeCount(0);
	}
	result.textContent = `You just pressed: ${event.key}`;
});

document.documentElement.addEventListener('click', (event) => {
	addImage(event.clientX, event.clientY);
	changeCount(count + 1);
});

phonekey.querySelectorAll('button').forEach((button) => {
	button.addEventListener('click', (event) => {
		event.stopPropagation();
		const allButtons = [...event.currentTarget.parentNode.querySelectorAll('button')];
		const index = allButtons.findIndex((i) => i === event.currentTarget);
		brush = `F${index + 1}`;
	});
});

cleanFlower.addEventListener('click', (event) => {
	event.stopPropagation();
	while (document.body.querySelector('.foo')) {
		document.body.querySelector('.foo').remove();
	}
	changeCount(0);
});

function bgSwitcher() {
	let currentBg = 0;
	const bgs = ['toilet.jpeg', 'Food.jpeg', 'trash.jpeg', '4.jpeg'];
	const assignBg = () => {
		document.documentElement.style.backgroundImage = `url("${bgs[currentBg]}")`;
	};
	const swapLeft = () => {
		currentBg = (currentBg > 0) ? currentBg - 1 : bgs.length - 1;
		assignBg();
	};
	const swapRight = () => {
		currentBg = (currentBg < bgs.length - 1) ? currentBg + 1 : 0;
		assignBg();
	};
	window.addEventListener('keyup', (event) => {
		if (event.key === 'ArrowLeft') swapLeft();
		if (event.key === 'ArrowRight') swapRight();
	});
	document.querySelector('.left').addEventListener('click', (event) => {
		event.stopPropagation();
		swapLeft();
	});
	document.querySelector('.right').addEventListener('click', (event) => {
		event.stopPropagation();
		swapRight();
	});
	assignBg();
}

function addImage(x, y) {
	var img = document.createElement("img");
	img.src = `${brush}.gif`;
	const appendImg = () => {
		img.className = 'foo';
		document.body.appendChild(img);
		img.style.left = `${x - img.offsetWidth / 2}px`;
		img.style.top = `${y - img.offsetHeight / 2}px`;
	};
	if ('decoding' in img) {
		img.decode().then(appendImg);
	} else {
		img.onload = appendImg;
	}
}

function changeCount(n) {
	count = n;
	document.getElementById('clickme').textContent = `You are ${count} level of pollen allergy`;
}
