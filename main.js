// # I numberd the codes to connect to the other code.
// # for example, if you see 'js 72' at CSS or HTML file, you can find 'js 72' at JS file

"use strict";

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

// js 60. handle scrolling when tapping on the navbar

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

// js 94  make home slowly fade to transparent as the window scrolls down

const home = document.querySelector(".home__container");
const homeAvatar = document.querySelector(".home__avatar");
const homeHeight = homeAvatar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  homeAvatar.style.opacity = 1 - window.scrollY / homeHeight;
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
  projects.forEach((project) => {
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });

  // js 70. project button animation

  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projectContainer.classList.remove("anim-out");
  }, 300);
});
