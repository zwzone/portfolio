const skillsTypes = ["languages", "frontend", "backend", "systems", "tools"];
const skillsTypesElem = document.querySelector(".skills-types");
const skillsTypesChildElems = skillsTypesElem.children;
const skillsListElem = document.querySelector(".skills-list");
const skillsListChildElems = skillsListElem.children;

skillsTypesElem.addEventListener("click", skillToggler);

function show() {
  const main = document.querySelector('main');
  if (main.style.filter) {
    main.style.filter = '';
  } else {
    main.style.filter = 'blur(5px)';
  }
  document.querySelector('.humberger').classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
}

function skillToggler(e) {
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
}
