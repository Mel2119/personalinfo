 /* toggle Icon navabar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onClick = () =>{
    
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}
 /* scroll section active link */
 let sections = document.querySelectorAll('section')
 let navLinks = document.querySelectorAll('header nav a')
 window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href"='+ id +']').classList.add('active')
            });
        };
    });
/*form validation*/
const phone= document.getElementById('phone')
const email=document.getElementById('email')
const pErr=document.getElementById('phonerr')
const form=document.getElementById('form')

console.log(emailErr)
form.addEventListener('submit', (e) => {

    e.preventDefault()

    if (phone.value == ''|| phone.value == null) {
        e.preventDefault();
        phoneErr.textContent = "Please enter your phonenumber";
      }

    else if (phone.value.length < 10 || nameInput.value.length > 12) {
        e.preventDefault();
        phoneErr.textContent = "phonenumber should be at least 10 characters and not greater than 12 characters";
    }

    if (email.value == "email"|| passInput.value=="123456"|| passInput.value=="abc123") {
        e.preventDefault()
        pErr.textContent="You password is easy to guess"
    }
    //pass length config
    if(email.value.length<6)
    {
        e.preventDefault()
        pErr.textContent="password characters should be greater or equal to 6"
    }
    

    //pass match conf
    else if (passInput.value !== passInput2.value) {
        e.preventDefault()
        pErr.textContent="Your password should match"
    }


    console.log(nameInput.value)
    console.log(email.value)
    
})

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
      '3rd year software engineering student',
      ' Junior UI/UX designer',
      '2nd year management student'
    ],
    typeSpeed: 70,
    backSpeed: 70,  // This property is misspelled, should be backSpeed
    backDelay: 1000,
    loop: true
  });



