const bodyElem = document.querySelector('body');
const mainElem = document.querySelector('main');
const humburgerElem = document.querySelector('.humburger');
const navElem = document.querySelector('nav');

const logoShowcaseElem = bodyElem.querySelector('.logo-showcase');
const logoShowcaseImgElem = logoShowcaseElem.querySelector('img');
const skillsTypes = ["languages", "frontend", "backend", "systems", "tools"];
const skillsTypesElem = document.querySelector(".skills-types");
const skillsTypesChildElems = skillsTypesElem.children;
const skillsListElem = document.querySelector(".skills-list");
const skillsListChildElems = skillsListElem.children;
const projectElems = document.querySelectorAll(".project");

// Logo Showcase Animation
setTimeout(() => {
  logoShowcaseImgElem.style.opacity = '1';
  setTimeout(() => {
    logoShowcaseImgElem.style.animation = 'rotation 1.5s';
    setTimeout(() => {
      logoShowcaseImgElem.style.filter = "drop-shadow(0px 0px 40px var(--color-primary-4))";
      setTimeout(() => {
        logoShowcaseElem.style.opacity = '0';
        logoShowcaseImgElem.style.filter = "none";
        setTimeout(() => {
          logoShowcaseElem.style.display = 'none';
        }, 400);
      }, 800);
    }, 1400);
  }, 400);
}, 400);

function sideBarToggler() {
  if (mainElem.style.filter) {
    mainElem.style.filter = '';
  } else {
    mainElem.style.filter = 'blur(5px)';
  }
  humburgerElem.classList.toggle('active');
  navElem.classList.toggle('active');
}

function sideBarRemove() {
  mainElem.style.filter = '';
  humburgerElem.classList.remove('active');
  navElem.classList.remove('active');
}

skillsTypesElem.addEventListener("click", (e) => {
  const target = e.target;
  for (let i = 0; i < skillsTypesChildElems.length; i++) {
    if (skillsTypesChildElems[i].classList.contains("active")) {
      skillsTypesChildElems[i].classList.remove("active");
    }
  }
  target.classList.add("active");
  for (let i = 0; i < skillsListChildElems.length; i++) {
    if (skillsListChildElems[i].classList.contains("active")) {
      skillsListChildElems[i].classList.remove("active");
    }
    if (skillsListChildElems[i].dataset.skillType === target.dataset.skillType) {
      skillsListChildElems[i].classList.add("active");
    }
  }
});

// Hide Header on scroll down
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  if (humburgerElem.classList.contains('active'))
    return;
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};

// Open project in new tab
projectElems.forEach((projectElem) => {
  projectElem.addEventListener("click", (event) => {
    window.open(event.currentTarget.dataset.projectUrl, "_blank");
  });
});
