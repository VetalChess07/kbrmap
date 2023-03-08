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
// const pointText = document.querySelector(".point__text");
const sliderImg = document.querySelectorAll(".swiper-slide__img");
const slider = document.querySelector(".swiper__js");
const point1 = document.querySelector(".point1");

const close = document.querySelector(".close");
const closeslider = document.querySelector(".close__slaider");
const iframeMap = document.querySelector(".iframe__map");

const sliderNoContentImg = document.querySelectorAll(
  ".swiper-slide__no-conten"
);

// let x = point1.offsetTop; // верхний отступ эл-та от родителя
// let y = point1.offsetLeft;
// console.log("x=[" + x + "] y=[" + y + "]"); // печатаем координаты

close.addEventListener("click", function () {
  nav.style.display = "none";
  document.body.classList.remove("noscroll");
});

console.log(slider);

console.log(tooltip.offsetWidth);

area.forEach((area) => {
  area.addEventListener("click", function () {
    //  popUpBoxImg.setAttribute("src", this.dataset.img);
    //  popUpBox.innerText.this.dataset.title;
    //  popUpBoxText.innerText.this.dataset.description;
    //  popUp.classList.toggle("active");
    popUpcloseBtn.classList.add("active");
    noContent.style.display = "none";
    popUpBoxTitle.textContent = this.getAttribute("data-title");
    popUpBoxImg.classList.add("active");
    popUpBoxImg.setAttribute("src", this.getAttribute("data-img"));
    popUpBoxlink.setAttribute("href", this.getAttribute("data-link"));
    popUpBoxText.textContent = this.getAttribute("data-description");
    popUp.classList.add("active");
    wrap.classList.add("active");
    nav.style.display = "block";
    slider.classList.remove("swiper__none");
    document.body.classList.add("active");
    nav.classList.add("media");
    popUpBoxlink.classList.add("active");
    iframeMap.setAttribute("src", this.getAttribute("data-iframemap"));

    sliderText.textContent = this.getAttribute("data-slider-text");
    sliderImg1.setAttribute("src", this.getAttribute("data-slider__img1"));
    sliderImg2.setAttribute("src", this.getAttribute("data-slider__img2"));
    sliderImg3.setAttribute("src", this.getAttribute("data-slider__img3"));
  });
  popUpcloseBtn.addEventListener("click", function () {
    popUpcloseBtn.classList.remove("active");
    popUpBoxTitle.textContent = null;
    // popUpBoxImg.setAttribute("src", this.getAttribute("data-img")) = null;
    popUpBoxImg.removeAttribute("src");
    // popUpBoxlink.setAttribute("href", this.getAttribute("data-link")) = null;
    popUpBoxImg.removeAttribute("href");
    popUpBoxText.textContent = null;
    popUp.classList.remove("active");
    wrap.classList.remove("active");
    nav.style.display = "none";

    document.body.classList.remove("active");
    popUpBoxlink.classList.remove("active");
    slider.classList.remove("active2");

    noContent.style.display = "block";
  });
  closeslider.addEventListener("click", function () {
    slider.classList.add("swiper__none");
    iframeMap.removeAttribute("src");
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
  sliderNoContentImg.addEventListener("click", function () {
    console.log("хуй");
  });
});

sliderImg.forEach((sliderImg) => {
  sliderImg.addEventListener("click", function () {
    popUpBoxImg.src = sliderImg.src;
    console.log("ff");
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
