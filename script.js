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


//  Cousor

const easeOutSine = (t, b, c, d) => {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  };

  const easeOutQuad = (t, b, c, d) => {
    t /= d;
    return -c * t * (t - 2) + b;
  };

  class WaterTexture {
    constructor(options) {
      this.size = 64;
      this.points = [];
      this.maxAge = 64;
      this.last = null;

      // Dynamically calculate the size and radius based on window size
      this.width = window.innerWidth;
      // console.log(window.innerWidth, window.innerHeight);
      
      this.height = body.scrollHeight;
      this.radius = Math.min(this.width, this.height) * 0.06; // Size is 10% of the smaller dimension

      // Create the canvas with dynamic size
      this.initTexture();

      // Debugging, if needed
      if (options.debug) document.body.append(this.canvas);
    }

    initTexture() {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "WaterTexture";
      this.canvas.width = this.width;
      this.canvas.height = body.scrollHeight;
      this.canvas.style.position = "absolute";
      this.canvas.style.top = "0";
      this.canvas.style.left = "0";
      this.canvas.style.zIndex = "-4";
      this.ctx = this.canvas.getContext("2d");
      this.texture = new THREE.Texture(this.canvas);
      this.clear();
    }

    clear() {

        
            if (body.classList.contains('darkmode')) {
                this.ctx.fillStyle = "black";
            } else {
                this.ctx.fillStyle = "white";
            }
        // this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addPoint(point) {
      let force = 0;
      let vx = 0;
      let vy = 0;
      const last = this.last;
      if (last) {
        const relativeX = point.x - last.x;
        const relativeY = point.y - last.y;
        const distanceSquared = relativeX * relativeX + relativeY * relativeY;
        const distance = Math.sqrt(distanceSquared);
        vx = relativeX / distance;
        vy = relativeY / distance;
        force = Math.min(distanceSquared * 10000, 1);
      }

      this.last = {
        x: point.x,
        y: point.y,
      };
      this.points.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
    }

    update() {
      this.clear();
      let agePart = 1 / this.maxAge;
      this.points.forEach((point, i) => {
        let slowAsOlder = 1 - point.age / this.maxAge;
        let force = point.force * agePart * slowAsOlder;
        point.x += point.vx * force;
        point.y += point.vy * force;
        point.age += 1;
        if (point.age > this.maxAge) {
          this.points.splice(i, 1);
        }
      });

      this.points.forEach((point) => {
        this.drawPoint(point);
      });
      this.texture.needsUpdate = true;
    }

    drawPoint(point) {
      let pos = {
        x: point.x * this.width,
        y: point.y * this.height,
      };
      const radius = this.radius;
      const ctx = this.ctx;

      let intensity = 1;
      if (point.age < this.maxAge * 0.3) {
        intensity = easeOutSine(point.age / (this.maxAge * 0.3), 0, 1, 1);
      } else {
        intensity = easeOutQuad(
          1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7),
          0,
          1,
          1
        );
      }
      intensity *= point.force;

      let red = ((point.vx + 1) / 2) * 255;
      let green = ((point.vy + 1) / 2) * 255;
      let blue = intensity * 255;

      let color = `${red}, ${green}, ${blue}`;

      let offset = this.width * 5;
      ctx.shadowOffsetX = offset;
      ctx.shadowOffsetY = offset;
      ctx.shadowBlur = radius * 1;
      ctx.shadowColor = `rgba(${color},${1.5 * intensity})`;

      this.ctx.beginPath();
    //   this.ctx.fillStyle = "black";
    btn.addEventListener("click",(e)=>{
        if (body.classList.contains('darkmode')) {
            this.ctx.fillStyle = "black";
        } else {
            this.ctx.fillStyle = "white";
        }
    }) 
    
      this.ctx.arc(pos.x -offset-20, pos.y - offset-20, radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  // Main App class to handle logic
  class App {
    constructor() {
      this.waterTexture = new WaterTexture({ debug: true });
      this.tick = this.tick.bind(this);
      this.init();
    }

    init() {
      window.addEventListener("mousemove", this.onMouseMove.bind(this));
      window.addEventListener("resize", this.onResize.bind(this));
      this.tick();
    }

    onResize() {
      this.waterTexture.width = window.innerWidth;
      this.waterTexture.height = window.innerHeight;
      this.waterTexture.radius = Math.min(window.innerWidth, window.innerHeight) * 0.1;
      this.waterTexture.canvas.width = this.waterTexture.width;
      this.waterTexture.canvas.height = this.waterTexture.height;
    }

    onMouseMove(ev) {
      const point = {
        x: ev.clientX / window.innerWidth,
        y: ev.clientY / window.innerHeight,
      };

      this.waterTexture.addPoint(point);
    }

    tick() {
      this.waterTexture.update();
      requestAnimationFrame(this.tick);
    }
  }

  const myApp = new App();


  // INFO

  const divs = document.querySelectorAll('.HH');

 
  divs.forEach((div, index) => {
    
    const paragraph = document.createElement('p');
    
  
    const content = [
      `<strong>HTML</strong>Proficient in structuring web pages with <b>HTML5</b>, ensuring semantic and accessible code. Experienced in using essential elements such as <b>div</b>, <b>header</b>, <b>footer</b>, <b>article</b>, <b>section</b>, and </b>nav for clear page organization. Skilled in creating <b>forms</b>, <b>tables</b>, and handling various media elements (<b>images, videos, audio</b>). Comfortable with using HTML for creating responsive layouts when combined with CSS and JavaScript.`,
      `<strong>CSS</strong>Strong understanding of CSS3 for styling clean, responsive, and modern user interfaces. Skilled in using <b>selectors</b>, <b>box model</b>, <b>colors</b>, <b>typography</b>, <b>borders</b>, and <b>spacing</b>. Proficient in <b>Flexbox</b> and <b>Grid</b> for layout designs. Experienced in using <b>media queries</b> for responsive design and mobile-first development. Familiar with <b>pseudo-classes</b> (:hover, :nth-child) and <b>transitions/animations</b> for interactivity. Comfortable with custom themes, dark/light modes, and integrating CSS with HTML and JavaScript.`,
      `<strong>JavaScript Skills</strong><br> Proficient in JavaScript fundamentals including variables, data types, operators, conditionals, and loops. Experienced with functions (regular, arrow, and callbacks), arrays and objects, and modern ES6+ features like destructuring, template literals, spread/rest operators, and async/await. Skilled in DOM manipulation, event handling, and using browser APIs like Fetch and LocalStorage. Familiar with debugging using DevTools and writing clean, modular code using ES modules.`,
      `<strong>Java</strong>Strong understanding of Java core concepts including data types, variables, operators, conditionals, loops, arrays, and strings. Proficient in object-oriented programming (OOP) with classes, objects, inheritance, polymorphism, encapsulation, and abstraction. Experienced with exception handling, file I/O, collections framework (List, Set, Map), and multithreading. Skilled in building backend applications using Java with JDBC and starting with Spring Boot.`,
      `<strong>Python</strong>Familiar with Python and continuously improving skills through hands-on projects and learning.`,
      `<strong>MySQL</strong>Good understanding of relational database concepts and SQL queries. Skilled in creating and managing databases, tables, and relationships using primary and foreign keys. Proficient in writing SQL queries for CRUD operations (Create, Read, Update, Delete), using JOINs, GROUP BY, ORDER BY, WHERE, and HAVING clauses. Experienced with subqueries, views, indexes, and stored procedures. Familiar with integrating MySQL with Java using JDBC for full-stack applications.`,
      `<strong>Spring Boot</strong>Basic experience with Spring Boot, currently leveling up.`,
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
    // paragraph.style.color = 'black'; // Ensure text is visible
    paragraph.style.fontSize = '14px'; // Adjust font size if needed
    paragraph.style.width = '35vw';
    paragraph.innerHTML = content[index] || `<strong>Default</strong> content for div ${index + 1}.`;
    paragraph.style.position = 'absolute';
    // paragraph.style.backgroundColor = 'transparent';
    paragraph.style.zIndex = '3';
    paragraph.style.padding = '8px';
    // paragraph.style.border = '1px solid black';
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
  
    // Add hover event listeners
    div.addEventListener('mouseenter', () => {
      adjustParagraphPosition();
      paragraph.style.display = 'block';
    });
  
    div.addEventListener('mouseleave', () => {
      paragraph.style.display = 'none';
    });
  });
  
