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



const hamburg = document.querySelector('.hamburg');
const cancel = document.querySelector('.cancel');
const dropdown = document.querySelector('.dropdown');

hamburg.addEventListener('click', () => {
  dropdown.style.transform = 'translateY(0)';
  hamburg.style.display = 'none';
  cancel.style.display = 'block';
});

cancel.addEventListener('click', () => {
  dropdown.style.transform = 'translateY(-500px)';
  cancel.style.display = 'none';
  hamburg.style.display = 'block';
});

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

const timeline = gsap.timeline({ repeat: 0, repeatDelay: 2 });
    timeline.to(".image", { duration: 2, rotation: 360, ease: "elastic.out(1, 0.5)" })
            .to(".image", { duration: 2, x: 0, scale: 5 , opacity: 0.8});


const mm = gsap.matchMedia();

mm.add("(max-width: 440px)", () => {
    const smallScreenTimeline = gsap.timeline({ repeat: 0 });
    smallScreenTimeline.to(".image", { duration: 2, rotation: 360, ease: "elastic.out(1, 0.5)" })
                       .to(".image", { duration: 2, x: 0, scale: 1 })
                       .to(".image", { duration: 1,scale: 5, opacity: 0.3 });
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

// about 
gsap.registerPlugin(ScrollTrigger);
gsap.from(".cell1 .info", {
    opacity: 0,
    y: 50,
    duration: 2, 
    scrollTrigger: {
        trigger: ".cell1 .info", 
        start: "top 100%", 
        end: "bottom 25%",
        scrub: true,
        toggleActions: "play none none none" ,
    
    }
});

gsap.from(".cell1 .box", {
    opacity: 0,
    x: 150, 
    duration: 2, 
    scrollTrigger: {
        trigger: ".cell1 .box", 
        start: "top 100%", 
        end: "bottom 20%", 
        scrub: true, 
        toggleActions: "play none none none" ,
    }
});


//  Cousor



if(body.classList.contains('darkmode')){
  const canvas = document.getElementById("cursorCanvas");
  const ctx = canvas.getContext("2d");

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  // let z = canvas.style.zIndex = -9;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    // z = canvas.style.zIndex = -9;
  });

  let particles = [];

  document.addEventListener("mousemove", (e) => {
  const color = `hsl(0, 0%, 100%)`;
    particles.push({
      x: e.clientX,
      y: e.clientY,
      radius: 40,
      life: 0.9,
      color
    });
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
      gradient.addColorStop(0, p.color.replace('60%', '100%').replace('hsl', 'hsla').replace(')', `,${p.life})`));
      gradient.addColorStop(1, 'rgba(39, 158, 57, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      p.life -= 0.05;
      if (p.life <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(animate);
  }

  animate();
}



  // INFO

  const divs = document.querySelectorAll('.HH');

 
  divs.forEach((div, index) => {
    
    const paragraph = document.createElement('p');
    
  
    const content = [
      `<strong>HTML</strong><br>Proficient in structuring web pages with <b>HTML5</b>, ensuring semantic and accessible code. Experienced in using essential elements such as <b>div</b>, <b>header</b>, <b>footer</b>, <b>article</b>, <b>section</b>, and </b>nav for clear page organization. Skilled in creating <b>forms</b>, <b>tables</b>, and handling various media elements (<b>images, videos, audio</b>). Comfortable with using HTML for creating responsive layouts when combined with CSS and JavaScript.`,
      `<strong>CSS</strong><br>Strong understanding of CSS3 for styling clean, responsive, and modern user interfaces. Skilled in using <b>selectors</b>, <b>box model</b>, <b>colors</b>, <b>typography</b>, <b>borders</b>, and <b>spacing</b>. Proficient in <b>Flexbox</b> and <b>Grid</b> for layout designs. Experienced in using <b>media queries</b> for responsive design and mobile-first development. Familiar with <b>pseudo-classes</b> (:hover, :nth-child) and <b>transitions/animations</b> for interactivity. Comfortable with custom themes, dark/light modes, and integrating CSS with HTML and JavaScript.`,
      `<strong>JavaScript</strong><br>Proficient in JavaScript fundamentals including variables, data types, operators, conditionals, and loops. Experienced with functions (regular, arrow, and callbacks), arrays and objects, and modern ES6+ features like destructuring, template literals, spread/rest operators, and async/await. Skilled in DOM manipulation, event handling, and using browser APIs like Fetch and LocalStorage. Familiar with debugging using DevTools and writing clean, modular code using ES modules.`,
      `<strong>Java</strong><br>Strong understanding of Java core concepts including data types, variables, operators, conditionals, loops, arrays, and strings. Proficient in object-oriented programming (OOP) with classes, objects, inheritance, polymorphism, encapsulation, and abstraction. Experienced with exception handling, file I/O, collections framework (List, Set, Map), and multithreading. Skilled in building backend applications using Java with JDBC and starting with Spring Boot.`,
      `<strong>Python</strong><br>Familiar with Python and continuously improving skills through hands-on projects and learning.`,
      `<strong>MySQL</strong><br>Good understanding of relational database concepts and SQL queries. Skilled in creating and managing databases, tables, and relationships using primary and foreign keys. Proficient in writing SQL queries for CRUD operations (Create, Read, Update, Delete), using JOINs, GROUP BY, ORDER BY, WHERE, and HAVING clauses. Experienced with subqueries, views, indexes, and stored procedures. Familiar with integrating MySQL with Java using JDBC for full-stack applications.`,
      `<strong>Spring Boot</strong><br>Basic experience with Spring Boot, currently leveling up.`,
    ];


    if (body.classList.contains('darkmode')) {
      paragraph.style.color = 'white';
      paragraph.style.backgroundColor = 'black';
      paragraph.style.border = '1px solid white';
  } else {
    paragraph.style.color = 'black';
    paragraph.style.backgroundColor = 'white';
    paragraph.style.border = '1px solid black';
  }
    
    paragraph.style.fontSize = '14px'; 
    paragraph.style.width = '35vw';
    paragraph.innerHTML = content[index] || `<strong>Default</strong> content for div ${index + 1}.`;
    paragraph.style.position = 'absolute';
   
    paragraph.style.zIndex = '3';
    paragraph.style.padding = '8px';
   
    paragraph.style.borderRadius = '40px';
    paragraph.style.display = 'none';
    paragraph.style.transition = 'opacity 0.5s ease-in-out';
    paragraph.style.opacity = '0';
    setTimeout(() => {
      paragraph.style.opacity = '1';
    }, 4);
    div.appendChild(paragraph);
  
  
    function adjustParagraphPosition() {
      const rect = div.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
  
      if (rect.top + rect.height / 2 < viewportCenter) {
        
        paragraph.style.top = '120%';
      } else {
        
        paragraph.style.top = '-130%';
      }
    }
  
    
    div.addEventListener('dblclick', () => {
      adjustParagraphPosition();
      paragraph.style.display = 'block';
    });
  
    div.addEventListener('mouseleave', () => {
      paragraph.style.display = 'none';
    });
  });


          
  document.addEventListener('DOMContentLoaded', function () {
    const svgElements = [
      { svg: 'bezierSvg', path: 'bezierPath', string: '.string' }
    ];

    svgElements.forEach(({ svg, path, string }) => {
      const svgElementsCollection = document.getElementsByClassName(svg);
      const pathElementsCollection = document.getElementsByClassName(path);

      if (!svgElementsCollection.length || !pathElementsCollection.length) {
        console.error(`Elements with class '${svg}' or '${path}' not found.`);
        return;
      }

      gsap.from(string, {
        y: 20,
        duration: 1,
        delay: 1,
      });

      Array.from(svgElementsCollection).forEach((svgElement, index) => {
        const pathElement = pathElementsCollection[index];

        svgElement.addEventListener('mousemove', function (e) {
          const boundingRect = svgElement.getBoundingClientRect();
          const mouseX = e.clientX - boundingRect.left;
          const mouseY = e.clientY - boundingRect.top;
          const newPath = `M 30 80 Q ${mouseX} ${mouseY} 1480 80`;

          gsap.to(pathElement, {
            attr: { d: newPath },
            duration: 0.08,
            ease: 'power3.out',
            stroke: document.body.classList.contains('darkmode') ? 'white' : 'black',
            zIndex: 3
          });
        });

        svgElement.addEventListener('mouseleave', function () {
          gsap.to(pathElement, {
            attr: { d: 'M 30 80 Q 95 80 1480 80' },
            duration: 1.5,
            ease: 'elastic.out(1, 0.2)'
          });
        });
      });
    });
  });  

// projects

gsap.registerPlugin(ScrollTrigger);

const projectsSection = document.createElement('section');
projectsSection.id = 'projects';
projectsSection.className = 'boxxx';

const projectsContainer = document.createElement('div');
projectsContainer.className = 'projects-container';

const heading = document.createElement('h1');
heading.textContent = 'Projects';
projectsContainer.appendChild(heading);

const projectBoxes = document.createElement('div');
projectBoxes.className = 'project-boxes';

const projects = [
  {
    imgSrc: 'pic/1stpage.jpg',
    title: 'Portfolio',
    description: 'A modern, responsive portfolio built with HTML, CSS, JavaScript, and GSAP for smooth animations and transitions. It showcases my skills, projects, and experience in a visually appealing way.'
  },{
    imgSrc: 'pic/Stock-Market.webp',
    title: 'Stock Market Simulator',
    description: `A web-based stock market simulator built using HTML, CSS, JavaScript, jQuery, and Bootstrap, designed to mimic the dynamics of real-world trading in a simplified and interactive way.`
  },
  {
    imgSrc: 'pic/pyy.png',
    title: 'Billing System',
    description: `A Python-Tkinter based desktop app for small businesses. It supports user login, client and product management (add/delete), and generates itemized bills. Simple UI, easy workflow`
  }
  
];

projects.forEach((project, index) => {
  const projectBox = document.createElement('div');
  projectBox.className = 'project-box';

  const img = document.createElement('img');
  img.src = project.imgSrc;
  img.alt = project.title;

  const title = document.createElement('h2');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.textContent = project.description;

  projectBox.appendChild(img);
  projectBox.appendChild(title);
  projectBox.appendChild(description);

  projectBoxes.appendChild(projectBox);
});

projectsContainer.appendChild(projectBoxes);
projectsSection.appendChild(projectsContainer);
document.body.insertBefore(projectsSection, document.getElementById('cursorCanvas'));

const style = document.createElement('style');
style.textContent = `

`;
document.head.appendChild(style);


ScrollTrigger.defaults({ scroller: "body" });
gsap.to(".project-boxes", {
  x: () => `-${document.querySelector(".project-boxes").scrollWidth - window.innerWidth}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".projects-container",
    start: "top top",
    end: () => `+=${document.querySelector(".project-boxes").scrollWidth - window.innerWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
  }
});

// if (window.innerWidth > 440) {
//   gsap.to(".project-boxes", {
//     x: () => `-${document.querySelector(".project-boxes").scrollWidth - window.innerWidth}px`,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".projects-container",
//       start: "top top",
//       end: () => `+=${document.querySelector(".project-boxes").scrollWidth - window.innerWidth}`,
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//     }
//   });
// }
