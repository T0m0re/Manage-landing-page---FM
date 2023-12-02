const primaryHeader = document.querySelector(`.primary-header`);
const navToggle = document.querySelector(`.mobile-nav-toggle`);
const primaryNav = document.querySelector(`.primary-navigation`);
const mailInput = document.querySelector(".email-input");
const mailButton = document.querySelector(".email-button");

navToggle.addEventListener(`click`, () => {
  primaryNav.hasAttribute(`data-visible`)
    ? navToggle.setAttribute(`aria-expanded`, false)
    : navToggle.setAttribute(`aria-expanded`, true);
  primaryNav.toggleAttribute(`data-visible`);
  primaryHeader.toggleAttribute(`data-overlay`);

  const hamburger = document.querySelector(".icon-hamburger");
  const closeHamburger = document.querySelector(".icon-close");
  hamburger.classList.toggle("display-none");
  closeHamburger.classList.toggle("display-none");
});

// Carousel
const swiperEl = document.querySelector(`swiper-container`);

const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  on: {
    init() {},
  },
};

Object.assign(swiperEl, swiperParams);

swiperEl.initialize();

// Mail authentication
const ValidateEmail = function (mailInput) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailInput.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
};

mailButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  ValidateEmail(mailInput);
});
