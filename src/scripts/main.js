document.addEventListener("DOMContentLoaded", function () {
  openMenu();
  addTitle();
  changeImgs();
});

function openMenu() {
  const menuButton = document.querySelector(".header__nav__icon");
  const menu = document.querySelector(".header__list");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("display");
  });
}

function addTitle() {
  const movieTitles = document.querySelectorAll(".images__container > p");
  const movieImages = document.querySelectorAll(".images__container > img");
  const movieContainer = document.querySelectorAll(".images__container");

  for (let i = 0; i < movieTitles.length; i++) {
    movieContainer[i].addEventListener("mouseover", function () {
      movieTitles[i].classList.remove("display");
      movieImages[i].classList.add("filter");
    });
    movieContainer[i].addEventListener("mouseout", function () {
      movieTitles[i].classList.add("display");
      movieImages[i].classList.remove("filter");
    });
  }
}

function changeImgs() {
  const imagesCast = document.querySelectorAll(".cast__info__img--cast");
  const imagesActor = document.querySelectorAll(".cast__info__img--actor");
  const nameCast = document.querySelectorAll(".cast__info__text--dark");
  const nameActor = document.querySelectorAll(".cast__info__text--light");

  for (let i = 0; i < imagesCast.length + 1; i++) {
    imagesCast[i].parentNode.addEventListener("mouseover", function () {
      imagesCast[i].classList.add("display");
      imagesActor[i].classList.remove("display");
      nameCast[i].classList.add("display");
      nameActor[i].classList.remove("display");
    });

    imagesActor[i].parentNode.addEventListener("mouseout", function () {
      imagesCast[i].classList.remove("display");
      imagesActor[i].classList.add("display");
      nameCast[i].classList.remove("display");
      nameActor[i].classList.add("display");
    });
  }
}
