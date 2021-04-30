let brush = 'F1';
// let imgs = ['toilet.jpeg','trash.jpeg','4.jpeg','Food.jpeg'];
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


// function changeImage(dir) {
// 	var img = document.getElementById("imgClickAndChange");
// 	img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
// }

// document.onkeydown = function(e) {
// 	e = e || window.event;
// 	if (e.keyCode == '37') {
// 		changeImage(-1) //left <- show Prev image
// 	} 
	
// 	if (e.keyCode == '39') {
// 		// right -> show next image
// 		changeImage(1)
// 	}
// 	if (e.keyCode == '39') {
// 		// right -> show next image
// 		changeImage(2)
// 	}	
// 	if (e.keyCode == '39') {
// 		// right -> show next image
// 		changeImage()
// 	}	
// }



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


// window.addEventListener('keydown', (event) => {
// 	if (event.code === 'ArrowLeft') {
// 	  left.addEventListener('click',function(){
// 		push.plusDivs(-1);
// 	  })
// 	}
// 	if (event.code === 'ArrowRight') {
// 		right.addEventListener('click',function(){
// 		  push.plusDivs(1)
// 		})
// 	  }
//   });



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
	}

  });



cleanFlower.addEventListener('click',function(){
	while (document.body.querySelector('.foo')) {
		document.body.querySelector('.foo').remove();
	}
})


var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "You are "  + count + " level of pouen allergy";
};


