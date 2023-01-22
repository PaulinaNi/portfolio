const navBar_hamburgerBtn = document.querySelector('.navBar_hamburgerBtn ')


const navBar_hamburgerBtnHandler = () => {
 navBar_hamburgerBtn.getAttribute('aria-expanded') === 'true' ?
  navBar_hamburgerBtn.setAttribute('aria-expanded', 'false') :
  navBar_hamburgerBtn.setAttribute('aria-expanded', 'true')
}

navBar_hamburgerBtn.addEventListener('click', navBar_hamburgerBtnHandler)