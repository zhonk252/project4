let brush = 'F1';
let cleanFlower = document.querySelector('#cleanit');
let result = document.querySelector('#result');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let phonekey = document.querySelector('.phonekey');


function addImage(x,y) {
	var img = document.createElement("img");
	img.src = `${brush}.gif`;
	document.body.appendChild(img);
    
	img.style.left =`${x-img.offsetWidth / 2}px`
    img.style.top =`${y-img.offsetHeight / 14}px`

	var class_name = "foo";
	img.setAttribute("class", class_name);
}




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

document.querySelector('.left').addEventListener('click', (event) => {
  event.stopPropagation();
  plusDivs(-1);
});


document.querySelector('.right').addEventListener('click', (event) => {
  event.stopPropagation();
  plusDivs(-1)
});



  document.addEventListener('keyup', (event) => {
          if (event.key === 'ArrowLeft') plusDivs(-1);
          if (event.key === 'ArrowRight') plusDivs(1);
      });


// function bgSwitcher() {
//   let currentBg = 0;
//   const bgs = ['toilet.jpeg', 'Food.jpeg', 'trash.jpeg', 'bg4.png'];
//   const swapLeft = () => {
//       currentBg = (currentBg > 0) ? currentBg - 1 : bgs.length - 1;
//       document.body.style.backgroundImage = `url("${bgs[currentBg]}")`;
//   };
//   const swapRight = () => {
//       currentBg = (currentBg < bgs.length - 1) ? currentBg + 1 : 0;
//       document.body.style.backgroundImage = bgs[currentBg];
//   };
//   document.addEventListener('keyup', (event) => {
//       if (event.key === 'ArrowLeft') swapLeft();
//       if (event.key === 'ArrowRight') swapRight();
//   });
// }



document.documentElement.addEventListener('click', (event) => {
	addImage(event.clientX, event.clientY);
});

window.addEventListener('keyup', (event) => {
    if (event.isComposing || event.keyCode === 229) return;
    if (event.key === '1' || event.code === 'Digit1') {
        brush = 'F1';
    }
	if (event.key === '2' || event.code === 'Digit2') {
        brush = 'F2';
    }
	if (event.key === '3' || event.code === 'Digit3') {
        brush = 'F3';
    }
	if (event.key === '4' || event.code === 'Digit4') {
        brush = 'F4';
    }
	if (event.key === '5' || event.code === 'Digit5') {
        brush = 'F5';
    }
	if (event.key === '6' || event.code === 'Digit6') {
        brush = 'F6';
    }
	if (event.key === '7' || event.code === 'Digit7') {
        brush = 'F7';
    }
	if (event.key === '8' || event.code === 'Digit8') {
        brush = 'F8';
    }
	if (event.key === '9' || event.code === 'Digit9') {
        brush = 'F9';
    }
	result.innerText = "You just pressed: " + event.key;

});


document.documentElement.addEventListener('click', (event) => {
	addImage(event.clientX, event.clientY);
});



function myfunction1() { 
	brush='F1'
} 	

function myfunction2() { 
	brush='F2'
} 

function myfunction3() { 
	brush='F3'
} 

function myfunction4() { 
	brush='F4'
} 	

function myfunction5() { 
	brush='F5'
} 

function myfunction6() { 
	brush='F6'
} 
function myfunction7() { 
	brush='F7'
} 	

function myfunction8() { 
	brush='F8'
} 

function myfunction9() { 
	brush='F9'
} 




window.addEventListener('keyup', (event) => {
	if (event.code === 'Backspace') {
	  while (document.body.querySelector('.foo')) {
    document.body.querySelector('.foo').remove();
    }
    count = 0;
    button.innerHTML = "You are "  + count + " level of pollen allergy";
	}

});



cleanFlower.addEventListener('click',function(event){
  event.stopPropagation();
	while (document.body.querySelector('.foo')) {
		document.body.querySelector('.foo').remove();
	}
})


var button = document.getElementById("clickme"),
  count = 0;
  button.onclick = function() {
  count += 1;
  button.innerHTML = "You are "  + count + " level of pollen allergy";
};


