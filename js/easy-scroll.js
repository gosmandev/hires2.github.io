function scrollTo(element){
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
};

var button = document.querySelector('.header__bottom');
var about = document.querySelector('#about');
var works = document.querySelector('#works');
var feedback = document.querySelector('#feedback');
var contact = document.querySelector('#contact');

var section = document.querySelector('.header-s1');
var sectionAbout = document.querySelector('.s1');
var sectionWorks = document.querySelector('.s2');
var sectionTeam = document.querySelector('.s3');
var sectionContact = document.querySelector('.footer');

button.addEventListener('click', () => {
	scrollTo(section);
});

about.addEventListener('click', () => {
	scrollTo(sectionAbout);
});

works.addEventListener('click', () => {
	scrollTo(sectionWorks);
});

feedback.addEventListener('click', () => {
	scrollTo(sectionTeam);
});

contact.addEventListener('click', () => {
	scrollTo(sectionContact);
});