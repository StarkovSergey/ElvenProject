console.log('hello');
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

// удаляем класс, который нужен для проверки загрузки js
navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

const navLinks = document.querySelectorAll('.navigation__link');
for (const link of navLinks) {
  link.addEventListener('click', () => {
    if (navMain.classList.contains('navigation--opened')) {
      navMain.classList.add('navigation--closed');
      navMain.classList.remove('navigation--opened');
    }
  });
}
