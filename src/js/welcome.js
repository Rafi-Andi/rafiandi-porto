const inputName = document.getElementById("name");
const buttonStart = document.getElementById("buttonStart");

const nameValue = sessionStorage.getItem('NAME_VALUE') || "";

inputName.value = nameValue

inputName.addEventListener("input", () => {
  console.log(inputName.value);
  if (inputName.value.length > 0) {
    buttonStart.innerHTML = "<p>Lets Go!</p>";
    buttonStart.classList.add("button-start");
    buttonStart.classList.remove("button-start-out");
    sessionStorage.setItem('NAME_VALUE', inputName.value)
  } else if (inputName.value == 0) {
    buttonStart.classList.remove("button-start");
    buttonStart.classList.add("button-start-out");
  }
});

window.addEventListener('load', () => inputName.focus())

const text1 = "Hi! I am Rafi, Web Developer 🚀";
const text2 = "before we get started. what is your name ?";
let i = 0;

function typeWriter1() {
  if (i < text1.length) {
    document.getElementById("typing1").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWriter1, 50);
  } else {
    setTimeout(typeWriter2, 50);
  }
}

let j = 0;
function typeWriter2() {
  if (j < text2.length) {
    document.getElementById("typing2").innerHTML += text2.charAt(j);
    j++;
    setTimeout(typeWriter2, 50);
  }
}

typeWriter1();
