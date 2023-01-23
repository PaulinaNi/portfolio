const navBar_hamburgerBtn = document.querySelector('.navBar_hamburgerBtn ')
const navBar = document.querySelector('.navBar')
const header = document.querySelector('header')
const navBar_Menu = document.querySelector('.navBar_Menu')


// open and close hamburger menu depending on aria-expanded value
const navBar_hamburgerBtnHandler = () => {
  navBar_hamburgerBtn.getAttribute('aria-expanded') === 'true' ?
    navBar_hamburgerBtn.setAttribute('aria-expanded', 'false') :
    navBar_hamburgerBtn.setAttribute('aria-expanded', 'true')
  header.classList.toggle('flex_column')
  navBar_Menu.classList.toggle('navBar_MenuMobile')
  navBar.classList.toggle('navBar_Mobile')
}

navBar_hamburgerBtn.addEventListener('click', navBar_hamburgerBtnHandler)