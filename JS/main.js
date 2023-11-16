/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    // const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SWIPER PROJECTS
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24, 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    // mousewheel: true,
    // keyboard: true,

    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
});

// EMAIL JS
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

// check if the field has a value 
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        //add and remove color
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');

        //show message
        contactMessage.textContent = 'Write the input fields 📝';
    }else {
        // serviceID - templateID - #form - publicKey(account) :all form https://dashboard.emailjs.com/admin/templates/44zxkc9/settings
        emailjs.sendForm('service_x912muh','template_64vaf1p','#contact-form','76aRxnZ3CNIxISm9z')
            .then(() => {
                //show message and add color
                contactMessage.classList.add('color-blue');
                contactMessage.textContent = 'Message sent ✅';

                //remove message after 5sec
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('OOPS! SOMETHING HAD FAILED...', error);
            });
        
        //clean the input fields
        contactName.value = '';
        contactEmail.value = '';
        contactProject.value = '';
    }
}
contactForm.addEventListener('submit', sendEmail);

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        }else {
            sectionClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);