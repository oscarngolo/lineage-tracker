var i = 0;
var images = [];
var time = 3000;

images[0] = 'images/baby.jpeg';
images[1] = 'images/black.jpeg';
images[2] = 'images/child.jpg';
images[3] = 'images/echo.jpeg';
images[4] = 'images/feet.jpeg';
images[5] = 'images/cute.jpg';
images[6] = 'images/hand.jpeg';
images[7] = 'images/lip.jpeg';
images[8] = 'images/mom.jpeg';
images[9] = 'images/blond.jpeg';
images[10] = 'images/bro.jpeg';
images[11] = 'images/shadow.jpeg';

function changeImg(){
  document.slide.src = images[i];
  if(i < images.length-1){
    i++;
  } else{
    i = 0;
  }

  setTimeout("changeImg()" , time);
}


window.onload = changeImg;

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}
