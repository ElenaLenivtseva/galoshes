// let dot = document.querySelector('.bird');

const animItem = document.querySelector('.bird');
if (animItem) {
    window.addEventListener('scroll', birdOnScroll)
    function birdOnScroll () {
            const animItemHeight = animItem.offsetHeight;
            // позиция объекта относительно верха страницы, насколько элемент ниже верха страницы
            const animItemOffset = offset(animItem).top;
            // коэффицент момента старта анимации
            const animStart = 1;
            let animItemPoint = window.innerHeight - animItemHeight/animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.innerHTML = "🦅";
                animItem.classList.add('bird--fly');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('bird--fly');
                }
                
            }
        
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
}