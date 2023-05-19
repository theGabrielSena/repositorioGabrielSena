// alternar ícone da barra de navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// link ativo das seções de rolagem
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });


// barra de navegação
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

// remova a barra de navegação ao clicar em algum link
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// scroll de imagens
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicos-container, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content', { origin: 'right' });

// typed js, animação de texto
const typed = new Typed('.multiple-text',{
    strings: ['Desenvolvedor BackEnd','Desenvolvedor FrontEnd','Web Designer','Administrador Salesforce'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 300,
    loop: true
});
