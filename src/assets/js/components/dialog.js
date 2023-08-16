const sectionDialog = document.querySelector('.dialogFairies');
let phrases = document.querySelectorAll('.dialogFairies__phrase')

sectionDialog.addEventListener('mouseenter', (e) => {
    for (let i = 0; i < phrases.length; i++) {
        phrases[i].computedStyleMap.marginRight = 0;
        phrases[i].computedStyleMap.marginLeft = 0;
        
    }
});