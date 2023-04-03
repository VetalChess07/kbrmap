const tooltip = document.querySelector(".tooltip");
const area = document.querySelectorAll(".area");
const wrap = document.querySelector(".wrap");
const nav = document.querySelector(".nav");
const popUp = document.querySelector(".pop-up");
const popUpBox = document.querySelector(".pop-up__box");
const noContent = document.querySelector(".no__content");
const popUpBoxImg = document.querySelector(".pop-up__img");
const popUpBoxTitle = document.querySelector(".pop-up__title");
const popUpBoxlink = document.querySelector(".pop-up__link");
const popUpBoxText = document.querySelector(".pop-up__text");
const popUpcloseBtn = document.querySelector(".pop-up__close");
const sliderText = document.querySelector(".slider__text");
const sliderImg1 = document.querySelector(".swiper-slide__img1");
const sliderImg2 = document.querySelector(".swiper-slide__img2");
const sliderImg3 = document.querySelector(".swiper-slide__img3");
const sliderImg = document.querySelectorAll(".swiper-slide__img");
const slider = document.querySelector(".swiper__js");
const point = document.querySelectorAll(".point");

const sliderTitle = document.querySelector(".slider__title");
const mapText = document.querySelector(".map__text");

const mapTextDescription = document.querySelector(".map__text-description");

const close = document.querySelector(".close");
const closeslider = document.querySelector(".close__slaider");
const iframeMap = document.querySelector(".iframe__map");
const burgerBtn = document.querySelector(".burger__btn");
const burgerInner = document.querySelector(".burger__inner");
const burgerContent = document.querySelector(".burger__content");
const burgerLineTop = document.querySelector(".burger__btn-line--top");
const burgerLineBottom = document.querySelector(".burger__btn-line--bottom");
console.log(burgerLineTop);

const sliderNoContentImg = document.querySelectorAll(
  ".swiper-slide__no-conten"
);

close.addEventListener("click", function () {
  nav.style.display = "none";
  document.body.classList.remove("noscroll");
});

console.log(slider);

console.log(tooltip.offsetWidth);

area.forEach((area) => {
  area.addEventListener("click", function () {
    popUpcloseBtn.classList.add("active");
    noContent.style.display = "none";
    popUpBoxTitle.textContent = this.getAttribute("data-title");
    sliderTitle.textContent = popUpBoxTitle.textContent;
    mapText.textContent = this.getAttribute("data-map-text");
    mapTextDescription.textContent = this.getAttribute("data-map-description");

    popUpBoxImg.classList.add("active");
    popUpBoxImg.setAttribute("src", this.getAttribute("data-img"));
    popUpBoxImg.setAttribute("alt", this.getAttribute("data-alt"));
    popUpBoxlink.setAttribute("href", this.getAttribute("data-link"));
    popUpBoxText.textContent = this.getAttribute("data-description");
    popUp.classList.add("active");
    wrap.classList.add("active");
    nav.style.display = "block";
    slider.classList.remove("swiper__none");

    nav.classList.add("media");
    popUpBoxlink.classList.add("active");
    iframeMap.setAttribute("src", this.getAttribute("data-iframemap"));

    sliderText.textContent = this.getAttribute("data-slider-text");
    sliderImg1.setAttribute("src", this.getAttribute("data-slider__img1"));
    sliderImg2.setAttribute("src", this.getAttribute("data-slider__img2"));
    sliderImg3.setAttribute("src", this.getAttribute("data-slider__img3"));
  });
  popUpcloseBtn.addEventListener("click", function () {
    nav.style.display = "none";
  });
  closeslider.addEventListener("click", function () {
    slider.classList.add("swiper__none");
    iframeMap.removeAttribute("src");
    nav.style.display = "none";
  });

  area.addEventListener("mousemove", function (e) {
    tooltip.innerText = this.dataset.title;
    tooltip.style.top = e.y + 20 + "px";
    tooltip.style.left = e.x + 20 + "px";
  });
  area.addEventListener("mousemove", function () {
    tooltip.style.display = "block";
  });
  area.addEventListener("mouseleave", function () {
    tooltip.style.display = "none";
  });
});

sliderNoContentImg.forEach(() => {
  sliderNoContentImg.addEventListener("click", function () {});
});
point.forEach((point) => {
  point.addEventListener("click", function () {
    point.classList.add("visited");
  });
});

sliderImg.forEach((sliderImg) => {
  sliderImg.addEventListener("click", function () {
    popUpBoxImg.src = sliderImg.src;
    console.log("ff");
    nav.style.display = "block";
  });
});

burgerBtn.addEventListener("click", function () {
  burgerLineTop.classList.toggle("active");
  burgerLineBottom.classList.toggle("active");
  burgerContent.classList.toggle("active");
  burgerInner.classList.toggle("active");
  document.body.classList.toggle("noscroll");
});
burgerInner.addEventListener("click", function (body) {
  burgerLineTop.classList.toggle("active");
  burgerLineBottom.classList.toggle("active");
  burgerContent.classList.toggle("active");
  burgerInner.classList.toggle("active");
  document.body.classList.toggle("noscroll");
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
