// display the first image
// then set slideshow interval
setTimeout(slideshow, 0);
var slideshowInterval = setInterval(slideshow, 7000);

var imageSlides = document.getElementsByClassName('imageSlides');
var circles = document.getElementsByClassName('circle');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var imageIndex = 0;

// hide images function
function hideImages() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove('visible');
  }
}

// remove filled circle
function emptyCircle() {
  for (var i = 0; i < imageSlides.length; i++) {
    circles[i].classList.remove('fill');
  }
}

// change current image to the next one
// empty current circle and fill the next circle
function nextImage() {
  var currentImage = imageSlides[imageIndex];
  var currentCircle = circles[imageIndex];
  currentImage.classList.add('visible');
  emptyCircle();
  currentCircle.classList.add('fill');
  imageIndex++;
}

// left and right arrows event function on click
function arrowClick(event) {
  var target = event.target;
  if (target == leftArrow) {
    // reset interval when arrow is clicked
    clearInterval(slideshowInterval);
    hideImages();
    emptyCircle();
    if (imageIndex == 1) {
      imageIndex = (imageSlides.length - 1);
      nextImage();
      slideshowInterval = setInterval(slideshow, 7000);
    } else {
      imageIndex--;
      imageIndex--;
      nextImage();
      slideshowInterval = setInterval(slideshow, 7000);
    }
  } 
  else if (target == rightArrow) {
    clearInterval(slideshowInterval);
    hideImages();
    emptyCircle();
    if (imageIndex == imageSlides.length) {
      imageIndex = 0;
      nextImage();
      slideshowInterval = setInterval(slideshow, 7000);
    } else {
      nextImage();
      slideshowInterval = setInterval(slideshow, 7000);
    }
  }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);

// slideshow function
function slideshow() {
  if (imageIndex < imageSlides.length) {
    nextImage();
  } else {
    imageIndex = 0;
    hideImages();
    nextImage();
  }
}
