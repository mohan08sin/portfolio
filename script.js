
const body = document.querySelector('body');
const btn = document.querySelector('.bld');
const icon = document.querySelector('.btn__icon');

function store(value) {
    localStorage.setItem('darkmode', value);
}

function load() {
    const darkmode = localStorage.getItem('darkmode');

if (!darkmode || darkmode == 'true') {
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
    store(true);
} 
else if (darkmode == 'false') {
    icon.classList.add('fa-sun');
}}

load();

btn.addEventListener('click', () => {
body.classList.toggle('darkmode');
    icon.classList.add('animated');

store(body.classList.contains('darkmode'));

if (body.classList.contains('darkmode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
} else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}
setTimeout(() => {
    icon.classList.remove('animated');
    }, 500);
});


function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

var typed = new Typed(".typewriter-text",
    {
        strings: ["Full stack developer.","Desiner.","Passionate Coder."],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true  
    }
)

window.onload = function() {
    let typer2 = new Typed(".typewriter-txt2", {
        strings: ["What I do!", "Ideas to Interactive Reality."],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
};


let typer4 = new Typed(".typewriter-text4",
    {
        strings: ["Skilled in responsive websites, animations, and back-end with Java & Spring Boot."],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true  
    }
)


gsap.to(".logo", {
    duration: 3,
    opacity: 1,
    y: -100,
    ease: "bounce.out"
});

const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    timeline.to(".image", { duration: 2, rotation: 360, ease: "elastic.out(1, 0.5)" })
            .to(".image", { duration: 2, x: 0, scale: 5 });


const mm = gsap.matchMedia();

mm.add("(max-width: 440px)", () => {
    const smallScreenTimeline = gsap.timeline({ repeat: 0 });
    smallScreenTimeline.to(".image", { duration: 2, rotation: 360, ease: "elastic.out(1, 0.5)" })
                       .to(".image", { duration: 2, x: 0, scale: 1 })
                       .to(".image", { duration: 1, opacity: 0.3 });
});

mm.add("(max-width: 884px)", () => {
    const smallScreenTimeline = gsap.timeline({ repeat: 0 });
    smallScreenTimeline.to(".image", { duration: 2, rotation: 360, ease: "elastic.out(1, 0.5)" })
                       .to(".image", { duration: 2, x: 0, scale: 1 })
                       .to(".image", { duration: 1, opacity: 0.3 });
});


gsap.fromTo(".svg-animation circle", {
    strokeDasharray: 315,
    strokeDashoffset: 250
}, 
{
    strokeDashoffset: 0,
    duration: 5,
    ease: "power1.out",
    repeat: -1,
    repeatDelay: 1.15
});


mm.add("(max-width: 884px)", () => {
    gsap.fromTo(".svg-animation circle", {
        strokeDasharray: 315,
        strokeDashoffset: 250
    }, 
    {
        strokeDashoffset: 0,
        duration: 5,
        ease: "power1.out",
        repeat: 0,
        repeatDelay: 1.1
    });
});

mm.add("(max-width: 440px)", () => {
    gsap.fromTo(".svg-animation circle", {
        strokeDasharray: 315,
        strokeDashoffset: 250
    }, 
    {
        strokeDashoffset: 0,
        duration: 5,
        ease: "power1.out",
        repeat: 0,
        repeatDelay: 1.1
    });
});


Draggable.create(".skill-box", {
    type: "x,y",
    bounds: ".skills-container"
});

gsap.to(".skill-box", {
    rotation: 360,
    duration: 3,
    ease: "elastic.out(1, 0.3)"
});


