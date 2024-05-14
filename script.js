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
