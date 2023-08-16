const swiper = new Swiper('.swiper', {
    // Optional parameters

    // loop: true,
    // slidesPerView: 3,
    // spaceBetween: 20,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
      // when window width is >= 320px
      350: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      650: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      1100: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });