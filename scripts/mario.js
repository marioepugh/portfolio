'use strict';



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$('#showSlides')


$('#home').show();

function showHome() {
  $('section.section').hide();
  $('#home').show();
  $('#about').show();
  $('#projects').show();
  $('#skills').show();
}

function showAbout() {
  $('section.section').hide();
  $('#about').show();
}

function showProjects() {
  $('section.section').hide();
  $('#projects').show();
}

function showSkills() {
  $('section.section').hide();
  $('#skills').show();
}

$('#home-button').on('click', showHome);

$('#about-button').on('click', showAbout);

$('#projects-button').on('click', showProjects);

$('#skills-button').on('click', showSkills);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
const conString =  process.env.DATABASE_URL || 'postgres://localhost:5432';
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);
