let text = '* По мотивам сказки Ганса Христиана Андерсена «Калоши счастья»'
let content = document.querySelector('#content')

for (let i in [...text]) {
  let letter = document.createElement('span')
  letter.classList.add('header__span')
  letter.textContent = [...text][i]
  if(letter.textContent.match(/\s/)) {
    letter.style.margin = 'auto 3px'
  }
  letter.style.animationDelay = i/30+'s'
  content.appendChild(letter)
}