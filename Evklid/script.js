const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


document.querySelectorAll('.work__tab').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.work__tab').forEach(function (btn) {
      btn.classList.remove('work__tab--active')
    });
    e.currentTarget.classList.add('work__tab--active');
    document.querySelectorAll('.work__cards').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('work__cards--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__cards--active');
  });
});


// or pass an array with HTMLElements
new Accordion('.accordion-container');





// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  })
})

// search

let btnSearh = document.querySelector(".header__search");
let fieldSearch = document.querySelector(".header__search-block");
let btnCloseSearch = document.querySelector(".header__close-search");

btnSearh.addEventListener("click", function () {
  fieldSearch.classList.add("header__search-block--active");
});

btnCloseSearch.addEventListener("click", function () {
  fieldSearch.classList.remove("header__search-block--active");
});








