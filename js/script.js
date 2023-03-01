const tooltip = document.querySelector(".tooltip");
const area = document.querySelectorAll(".area");
const popUp = document.querySelector(".pop-up");
const popUpBox = document.querySelector(".pop-up__box");
const popUpBoxImg = document.querySelector(".pop-up__img");
const popUpBoxTitle = document.querySelector(".pop-up__title");
const popUpBoxText = document.querySelector(".pop-up__text");
console.log(popUpBox);

area.forEach((area) => {
  area.addEventListener("click", function () {
    //  popUpBoxImg.setAttribute("src", this.dataset.img);
    //  popUpBox.innerText.this.dataset.title;
    //  popUpBoxText.innerText.this.dataset.description;
    //  popUp.classList.toggle("active");

    popUpBoxTitle.textContent = this.getAttribute("data-title");
    popUpBoxImg.setAttribute("src", this.getAttribute("data-img"));
    popUpBoxText.textContent = this.getAttribute("data-description");
    popUp.classList.add("active");
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

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
