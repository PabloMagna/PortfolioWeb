// toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navBar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    //remove link and icon when click
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form'
    , { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img'
    , { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content'
    , { origin: 'rigth' });


//contact messagge

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (data.errors) {
                    status.innerHTML = data.errors.map(error => error.message).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
            });
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

form.addEventListener("submit", handleSubmit);