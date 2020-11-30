window.onload = start;

const x = new Array();
const o = new Array();
const condicionGanadora = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let cont;
let active = true;

let lado = window.location.href;
lado = lado.slice(-1);
lado === "x" ? (cont = 0) : (cont = 1);

function start(e) {
  if (active == true) {
    if (e.srcElement.title !== "Tateti") {
      document
        .getElementById("1")
        .addEventListener("click", () => cambiaValor("1"));
      document
        .getElementById("2")
        .addEventListener("click", () => cambiaValor("2"));
      document
        .getElementById("3")
        .addEventListener("click", () => cambiaValor("3"));
      document
        .getElementById("4")
        .addEventListener("click", () => cambiaValor("4"));
      document
        .getElementById("5")
        .addEventListener("click", () => cambiaValor("5"));
      document
        .getElementById("6")
        .addEventListener("click", () => cambiaValor("6"));
      document
        .getElementById("7")
        .addEventListener("click", () => cambiaValor("7"));
      document
        .getElementById("8")
        .addEventListener("click", () => cambiaValor("8"));
      document
        .getElementById("9")
        .addEventListener("click", () => cambiaValor("9"));
      document.getElementById(
        "hintText"
      ).innerHTML = `Por las dudas... sos la ${lado}`;
    }
  }
}
const cambiaValor = (id) => {
  let cell = document.getElementById(id);
  if (active == true) {
    if (cell.innerHTML === "") {
      !(cont % 2)
        ? (cell.innerHTML = "<h2>X</h2>") && x.push(parseInt(id))
        : (cell.innerHTML = "<h2>O</h2>") && o.push(parseInt(id));
      cont += 1;
    }
  }
  checkWinner();
};

const checkWinner = (arrx = x, arro = o) => {
  for (combinación of condicionGanadora) {
    let a = combinación[0];
    let b = combinación[1];
    let c = combinación[2];
    if (arrx.includes(a) && arrx.includes(b) && arrx.includes(c)) {
      document.getElementById(a).classList.remove("btn-light");
      document.getElementById(a).classList.add("btn-success");
      document.getElementById(b).classList.remove("btn-light");
      document.getElementById(b).classList.add("btn-success");
      document.getElementById(c).classList.remove("btn-light");
      document.getElementById(c).classList.add("btn-success");
      active = false;
      notifyWinner("x");
      fillBlank();
    } else if (arro.includes(a) && arro.includes(b) && arro.includes(c)) {
      document.getElementById(a).classList.remove("btn-light");
      document.getElementById(a).classList.add("btn-success");
      document.getElementById(b).classList.remove("btn-light");
      document.getElementById(b).classList.add("btn-success");
      document.getElementById(c).classList.remove("btn-light");
      document.getElementById(c).classList.add("btn-success");
      active = false;
      notifyWinner("o");
      fillBlank();
    } else {
      if (lado === "o") {
        cont > 9
          ? (document.getElementById("textoHead").innerHTML =
              "Es un empate 🤦‍♂️️")
          : null;
      } else if (lado === "x") {
        cont == 9
          ? (document.getElementById("textoHead").innerHTML =
              "Es un empate 🤦‍♂️️")
          : null;
      }
    }
  }
};

const notifyWinner = (player) => {
  let winner = document.getElementById("textoHead");
  player === lado
    ? (winner.innerText = `¡Ganaste!`)
    : (winner.innerText = `¡Ganó ${player}!`);
};

const fillBlank = () => {
  for (i = 1; i <= 9; i++) {
    let elemento = document.getElementById(i);
    elemento.innerHTML === "" ? (elemento.innerHTML = "<h1>-</h1>") : null;
  }
};
