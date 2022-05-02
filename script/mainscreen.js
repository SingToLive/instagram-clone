// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mainscreen__article__feed__img-container__img");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  };
  console.log(slides, slideIndex);
  dots[slideIndex-1].className += " active";
  slides[slideIndex-1].style.display = "flex";
}

let slideIndex = 1;
showSlides(slideIndex);

