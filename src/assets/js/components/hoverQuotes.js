const quotes = ['<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— Боже мой! Или это мираж, фата-моргана, или я... господи... пьян? – застонал советник юстиции. – Что же это такое? Что же это такое?</p>', 
'<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— Нет у него ни жены, ни детей, ни тревог, ни забот; каждый вечер по гостям разъезжает. Хорошо бы мне поменяться с ним местами: я тогда стал бы самым счастливым человеком на земле!</p>', 
'<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— Взять бы, скажем, зрителей первого ряда, – думал медик, – И посмотреть, что делается у них в сердце, – должен же туда вести какой-то вход, вроде как в магазин.</p>', 
'<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— Эх, вот вы опять уезжаете, а мы остаемся, – сказал писарь. – Счастливые люди, летаете себе, где хотите и куда хотите, а у нас цепи на ногах. </p>', '<img src="/assets/img/quotes.png" alt="" class="map__img-out"><p class="text map__title">— О, путешествовать! - вырвалось у него, - Что может быть лучше! Это предел всех моих мечтаний.</p>'];

const phrases = [`<p class="number map__number">I.</p>
<p class="text map__title">Счастье </br>— в прошлом.</p>`, `<p class="number map__number">II.</p>
<p class="text map__title">Счастье </br>— в беззаботности.</p>`, `<p class="number map__number">III.</p>
<p class="text map__title">Счастье </br>— видеть людей насквозь.</p>`, `<p class="number map__number">IV.</p>
<p class="text map__title">Счастье </br>— лететь, куда хочешь.</p>`, `<p class="number map__number">V.</p>
<p class="text map__title">Счастье </br>— странствовать по миру.</p>`]

let items = document.querySelectorAll('.map__item');
if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('mouseenter', (e) => {
            items[i].innerHTML = quotes[i];
        });
        items[i].addEventListener('mouseleave', (e) => {
            items[i].innerHTML = phrases[i];
        });
    }
}
