const menuTrigger = document.querySelector('.menu--v2__btn'),
    menuList = document.querySelector('.menu--v2__wrap'),
    menuClose = document.querySelector('.menu--v2__item--close');

if (menuTrigger) {
    menuTrigger.addEventListener('click', () => {
        menuTrigger.classList.add('__active');
        menuList.classList.add('__active');
    })
}
if (menuClose) {
    menuClose.addEventListener('click', () => {
    menuTrigger.classList.remove('__active');
    menuList.classList.remove('__active');
})
}
