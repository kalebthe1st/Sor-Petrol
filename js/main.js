

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when clicked on each nav link remove the show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const swiper = new Swiper('.testimonial__container', {
  spaceBetween:16,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints:{
    640:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView: 3,
    },
  }
});
// hover blur effect
const projectCards = document.querySelectorAll('.projects__card');
projectCards.forEach((projectCard) => {
  const projectModal = projectCard.querySelector('.projects__modal');
  
  projectCard.addEventListener('mouseover', () => {
    projectModal.classList.add('projects__blur');
  });

  projectCard.addEventListener('mouseout', () => {
    projectModal.classList.remove('projects__blur');
  });
});

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


// Select all elements with the class 'projects__card'
var cardElements = document.querySelectorAll('.projects__card');

// Loop through each card element
cardElements.forEach(function(card) {
  var modal = card.querySelector('.projects__modal');

  card.addEventListener('mouseover', function() {
    modal.classList.remove('index');
  });

  card.addEventListener('mouseout', function() {
    modal.classList.add('index');
  });

  // Add initial 'index' class to the modal element
  modal.classList.add('index');
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 200,
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container, .testimonial__container`)
sr.reveal(`.home__image`, {origin:'bottom'})
sr.reveal(`.about__data, .skills__data`,{origin:'left'})
sr.reveal(`.about__image, .skills__content`,{origin:'right'})
sr.reveal(`.services__card, .projects__card, .testimonial__content`,{interval:75})
