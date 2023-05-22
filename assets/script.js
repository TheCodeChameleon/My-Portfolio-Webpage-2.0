const fullName = document.querySelector(".main-title");
const nameComplete = fullName.innerHTML;
const aboutMe = document.querySelector("[aboutMe]");
fullName.innerHTML = "";

//TypeWriter function
function TypeWriter(name) {
  setTimeout(() => {
    const myName = name.split("");
    fullName.innerHTML = "";
    myName.forEach((letter, index) => {
      setTimeout(function () {
        fullName.innerHTML += letter;
      }, 90 * index);
    });
  }, 90);
}

TypeWriter(nameComplete);

//Chameleon scroll

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll("[data-photo]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + window.innerHeight * 0.8;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 200)
  );
}

//Loader
window.onload = function() {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
}