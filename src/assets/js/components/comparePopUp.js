const compareWrap = document.querySelector('.compare-img__wrap');
const messagePopUp = document.querySelector('.compare-img--message');
console.log(messagePopUp.firstChild.nextSibling)
compareWrap.addEventListener('click', (e) => {
    messagePopUp.classList.add('__active');
    if (e.target.classList.contains('compare-img__opt-right')) {
        console.log('right')
        messagePopUp.firstChild.nextSibling.innerText = "Вы угадали! А писарь вот нет...";
    } else if (e.target.classList.contains('compare-img__opt-left')) {
        console.log('left')
        messagePopUp.style.background = "#781104";
        messagePopUp.firstChild.nextSibling.innerText = "Вы не угадали. Как, впрочем, и писарь...";
    }
    compareWrap.style.pointerEvents = "none";
})
