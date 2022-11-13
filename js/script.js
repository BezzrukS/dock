let BurgerClick = document.querySelector('.header__burger');
let BurgerOpen = document.querySelector('.menu-header__body');

BurgerClick.addEventListener('click', function () {
   if (BurgerClick.classList.contains('header__burger')) {
      BurgerClick.classList.add('header__burger-close')
      BurgerClick.classList.remove('header__burger')

      BurgerOpen.style.left = "0";
   }
   else {
      BurgerClick.classList.remove('header__burger-close')
      BurgerClick.classList.add('header__burger')

      BurgerOpen.style.left = "-100%";
   }
})