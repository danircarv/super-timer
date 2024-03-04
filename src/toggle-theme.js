let defaultTheme = true;

const audioElement = document.getElementById("audio");
const btnForest = document.getElementById("forest");
const btnRain = document.getElementById("rain");
const btnBookstore = document.getElementById("bookstore");
const btnFireplace = document.getElementById("fireplace");

btnForest.addEventListener("click", (event) => {
  const element = document.querySelector("html");
  const classeAtual = element.getAttribute("class");
  element.setAttribute("class", classeAtual.replace(classeAtual, "forest"));

  const img = document.querySelector("#forest");
  img.src = "./assets/img/forest-selected.svg";

  audioElement.src = "./assets/sounds/Floresta.wav";
  audioElement.play();

  const imgr = document.querySelector("#rain");
  imgr.src = "./assets/img/rain.svg";
  const imgb = document.querySelector("#bookstore");
  imgb.src = "./assets/img/bookstore.svg";
  const imgfp = document.querySelector("#fireplace");
  imgfp.src = "./assets/img/fireplace.svg";
});

btnRain.addEventListener("click", (event) => {
  const element = document.querySelector("html");
  const classeAtual = element.getAttribute("class");
  element.setAttribute("class", classeAtual.replace(classeAtual, "rain"));

  const img = document.querySelector("#rain");
  img.src = "./assets/img/rain-selected.svg";

  audioElement.src = "./assets/sounds/Chuva.wav";
  audioElement.play();

  const imgf = document.querySelector("#forest");
  imgf.src = "./assets/img/forest.svg";
  const imgb = document.querySelector("#bookstore");
  imgb.src = "./assets/img/bookstore.svg";
  const imgfp = document.querySelector("#fireplace");
  imgfp.src = "./assets/img/fireplace.svg";
});

btnBookstore.addEventListener("click", (event) => {
  const element = document.querySelector("html");
  const classeAtual = element.getAttribute("class");
  element.setAttribute("class", classeAtual.replace(classeAtual, "bookstore"));

  const img = document.querySelector("#bookstore");
  img.src = "./assets/img/bookstore-selected.svg";

  audioElement.src = "./assets/sounds/Cafeteria.wav";
  audioElement.play();

  const imgf = document.querySelector("#forest");
  imgf.src = "./assets/img/forest.svg";
  const imgr = document.querySelector("#rain");
  imgr.src = "./assets/img/rain.svg";
  const imgfp = document.querySelector("#fireplace");
  imgfp.src = "./assets/img/fireplace.svg";
});

btnFireplace.addEventListener("click", (event) => {
  const element = document.querySelector("html");
  const classeAtual = element.getAttribute("class");
  element.setAttribute("class", classeAtual.replace(classeAtual, "fireplace"));

  const img = document.querySelector("#fireplace");
  img.src = "./assets/img/fireplace-selected.svg";

  audioElement.src = "./assets/sounds/Lareira.wav";
  audioElement.play();

  const imgb = document.querySelector("#bookstore");
  imgb.src = "./assets/img/bookstore.svg";
  const imgf = document.querySelector("#forest");
  imgf.src = "./assets/img/forest.svg";
  const imgr = document.querySelector("#rain");
  imgr.src = "./assets/img/rain.svg";
});
