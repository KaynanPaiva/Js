function mostrarContent() {
  var dropdown = document.getElementById("containerContent");
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

function tornarAmarelo() {
  var square = document.getElementById("square");

  if (square.classList.contains("squareColorido")) {
    square.classList.remove("branco", "azul");
    square.classList.add("corPadrao");
    square.classList.replace("corPadrao", "amarelo");
  }
}

function tornarAzul() {
  var square = document.getElementById("square");

  if (square.classList.contains("squareColorido")) {
    square.classList.remove("branco", "amarelo");
    square.classList.add("corPadrao");
    square.classList.replace("corPadrao", "azul");
  }
}

function tornarBranco() {
  var square = document.getElementById("square");

  if (square.classList.contains("squareColorido")) {
    square.classList.remove("amarelo", "azul");
    square.classList.add("corPadrao");
    square.classList.replace("corPadrao", "branco");
  }
}

