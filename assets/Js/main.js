 /* toggle Icon navabar */
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');



menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active');
  });
  
 /* scroll section active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Use a for loop to iterate over navLinks
            for (let i = 0; i < navLinks.length; i++) {
                const link = navLinks[i];
                link.classList.remove('active');

                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            }
        }
    });


/*form validation*/
 const form= document.getElementById('form')
  const message=document.getElementById('textarea')
    const sendemail=(e) =>{
    e.preventDefault()
}
form.addEventListener(submit,sendemail)
 
/*sticky navbar*/
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

/*remove toggle icon and navbar */
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
 };
 /* scroll reveal */
 ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay:200,
 });
 ScrollReveal().reveal('.home-content,headng',{origin:'top'});
 ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact-form',{ origin:'bottom' });
 ScrollReveal().reveal('.home-content h1,.about-img',{ origin:'left' });
 ScrollReveal().reveal('.home-contact p,.about-content',{origin:'right'});
 /*typed js */
 const typed = new Typed('.multiple-text', {
    strings: [
      '3rd year software student',
      ' Junior UI/UX designer',
      '2nd year  in management'
    ],
    typeSpeed: 70,
    backSpeed: 70,  // This property is misspelled, should be backSpeed
    backDelay: 1000,
    loop: true
  });



