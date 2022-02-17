// # I numberd the codes to connect to the other code.
// # for example, if you see 'js 72' at CSS or HTML file, you can find 'js 72' at JS file

"use strict";




// 🍀js 10  <div class="about__majors">

const aboutMajors = document.querySelector('.about__majors');

/* 🍄hardcoding
let div = document.createElement('div');
div.innerHTML=`
    <div class="major">
    <div class="major__icon"><i class="fab fa-html5"></i></div>
    <h2 class="major__title">html</h2>
    </div>
`;
aboutMajors.appendChild(div);
 */

// class Majors {
//   constructor(a_icon,b_title){
//       let div = document.createElement('div');
//       div.innerHTML=`
//           <div class="major">
//           <div class="major__icon">${a_icon}</div>
//           <h2 class="major__title">${b_title}</h2>
//           </div>
//       `;
//       aboutMajors.appendChild(div);
//   }
// }

// let newMajor = new Majors(`<i class="fab fa-html5"></i>`,"html");
// let newMajor2 = new Majors(`<i class="fab fa-css3-alt"></i>`,"CSS");
// let newMajor3 = new Majors(`<i class="fab fa-js-square"></i>`,"Javascript");
// let newMajor4 = new Majors(`<i class="fab fa-git"></i>`,"git");



// js 58. show navbar with scrolling. make navbar transparnet when it is on the top

document.addEventListener("scroll", () => {
  const navbar = document.querySelector("#navbar");
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// js 60. handle scrolling when clicking on the navbar

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });

  if (link === null) {
    return;
  }

  //   (js 74). shutting down navbar when you click menu button
  navbarMenu.classList.remove("open");
});

//js 60-2. 'contact me' button:  click and move to there

// const homeContactBtn = document.querySelector(".home__contact");

// homeContactBtn.addEventListener("click", () => {
//   scrollIntoView("#contact");
// });

// (js 60-3)
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

//js 60-3. Handle click  on the 'arrow up' button

const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// js 74.  Navbar toggle button for small screen

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener("click", () => {
  let navbarMenu = document.querySelector(".navbar__menu");

  navbarMenu.classList.toggle("open");
});

// js 94 scrolls down, and putting CSS effect on home__avatar

const home = document.querySelector(".home__container");
const homeAvatar = document.querySelector(".home__avatar");
const homeHeight = homeAvatar.getBoundingClientRect().top;

document.addEventListener("scroll", () => {

  // homeAvatar.style.opacity = 1 - window.scrollY / homeHeight;
  console.log(home.getBoundingClientRect().top) 

  if (home.getBoundingClientRect().top < 70) {    
    homeAvatar.classList.add('avatar_change');
  }else{
    homeAvatar.classList.remove('avatar_change');
  }
});



// js 90. Show "arrow up" button when scrolling down

document.addEventListener("scroll", () => {

  const arrowUp = document.querySelector(".arrow-up");
  const homeHeight = home.getBoundingClientRect().height;

  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
    navbarMenu.classList.remove("open");
  } else {
    arrowUp.classList.remove("visible");
  }
});


// js 72. select the next selection and remove selection from the previous item

window.addEventListener("click", (e) => {
  const active = document.querySelector(".category__btn.selected");

  if (active != null) {
    active.classList.remove("selected");
  }
  e.target.classList.add("selected");
});

// js 68. projects. button click and move to the project.

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");


workBtnContainer.addEventListener("click", (e) => {
  // 68-1
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  if (filter == null) {
    return;
  }

  //  68-2
  projects.forEach((a_project) => {
    if (filter === "*" || filter === a_project.dataset.type) {
      a_project.classList.remove("invisible");
    } else {
      a_project.classList.add("invisible");
    }
  });

  // js 70. project button animation

  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projectContainer.classList.remove("anim-out");
  }, 300);
});



// js100, email

function sendMail(){
  let tempParams = {
    from_name : document.querySelector("#fromName").value,
    to_name : document.querySelector("#toName").value,
    message : document.querySelector("#msg").value,
  }

  emailjs.send('igkim-gmail','template_gbp2qug',tempParams).then(function (res){
    console.log('success',res.status);    
  })
}


// js110 notification_ballon

const sendMailBtn = document.querySelector('.sendMail-btn');
const container = document.querySelector('.notification_ballon .container');


sendMailBtn.addEventListener('click',()=>{

    container.setAttribute('style', 'display: flex;');    
    
    setTimeout(function(){
        container.setAttribute('style', 'display: none;');              
    }, 2000);
});

// js120 hide. clone project

const reactElm = document.querySelector('.react');
const hideElemAll = document.querySelectorAll('.hide');

let n = 0;    /* 🍉js 50 */

reactElm.addEventListener("click", function () {
  n++;    
 
  if (n > 2) {
    for (let i = 0; i < hideElemAll.length; i++) {
      hideElemAll[i].classList.remove('hide');           
    }
}
});

/* 
let timeId;
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const number = document.querySelector(".number");

timeId = setInterval(pokeHandler, 100); 

function pokeHandler() {
   let div = document.createElement('div');
    div.className = "poke";
    div.innerHTML = `
        <img src="./img/Pokecoin.png" alt="">            
    `;          
    box.append(div);
}   

 */


// 🍀js0217. work detail

const workDetailProjects = document.querySelector('.workDetail__projects');


renderWorkDetail_js();
function renderWorkDetail_js() {
  Data_js.forEach((p_Data_js)=>{
    workDetailProjects.innerHTML+=`
      <section class="projects-container">                
      <div class="img-container">
        <img src="${p_Data_js.imgSrc}" alt="">
      </div>

      <div class="title-container">
        <h2 class="title">${p_Data_js.title}</h2>

        <p class="skills">skill: <i class="fa-brands ${p_Data_js.skills}"></i> 
        </p>

        <p class="explain">${p_Data_js.explain}</p>

        <div>
          <a href="${p_Data_js.github}" target="_blank">github<i class="fab fa-github-alt"></i></a>

          <br>
                
          <a href="${p_Data_js.visit}" target="_blank">web site<i class="fab fa-chrome"></i></a> 
      </div>        
      </div>   
      </section>   
    `;
  })  
}



renderWorkDetail_react();
function renderWorkDetail_react() {
  Data_react.forEach((p_Data_react)=>{
    workDetailProjects.innerHTML+=`
      <section class="projects-container">                
      <div class="img-container">
        <img src="${p_Data_react.imgSrc}" alt="">
      </div>

      <div class="title-container">
        <h2 class="title">${p_Data_react.title}</h2>

        <p class="skills">skill: <i class="fa-brands ${p_Data_react.skills}"></i> 
        </p>

        <p class="explain">${p_Data_react.explain}</p>

        <div>
          <a href="${p_Data_react.github}" target="_blank">github<i class="fab fa-github-alt"></i></a>

          <br>
                
          <a href="${p_Data_react.visit}" target="_blank">web site<i class="fab fa-chrome"></i></a> 
      </div>        
      </div>   
      </section>   
    `;
  })  
}
