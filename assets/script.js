const fullName = document.querySelector(".main-title");
const nameComplete = fullName.innerHTML;
const aboutMe = document.querySelector("[aboutMe]");
const openBtn = document.querySelector("[openBtn]");
const closeBtn = document.querySelector("[closeBtn]");
fullName.innerHTML = "";

//TypeWriter function
function TypeWriter(name) {
  setTimeout(() => {
    const myName = name.split("");
    fullName.innerHTML = "";
    myName.forEach((letter, index) => {
      setTimeout(function () {
        fullName.innerHTML += letter;
      }, 100 * index);
    });
  }, 1000);
}

TypeWriter(nameComplete);

//Copy Button
document.getElementById("botao-copiar").addEventListener("click", function () {
  var copyText = document.getElementById("texto-copiado");
  var transferArea = document.createElement("textarea");
  transferArea.value = copyText.textContent;
  document.body.appendChild(transferArea);
  transferArea.select();
  document.execCommand("copy");
  document.body.removeChild(transferArea);
});

//CLOSE AND OPEN BUTTON (SECTION: ABOUT ME)
openBtn.addEventListener("click", openPage);
closeBtn.addEventListener("click", closePage);

function openPage() {
  aboutMe.classList.remove("disable");
}

function closePage() {
  aboutMe.classList.add("disable");
}
