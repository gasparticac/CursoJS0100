const link = "https://api.thecatapi.com/v1/images/search";
const facts = "https://catfact.ninja/fact";
const arr = new Array();
const arr2 = new Array();
let cont = 0;

//inicia: call 1 y 2 (img y fact), click: pop y call

//get random cat image
const fetchImage = async () => {
  try {
    const imgResponse = await fetch(link);
    const imgBody = await imgResponse.json();
    kitten = imgBody[0].url;
    return kitten;
  } catch (err) {
    console.error(err);
  }
};

//get random cat fact
const fetchFact = async () => {
  try {
    const factResponse = await fetch(facts);
    const factBody = await factResponse.json();
    fact = factBody.fact;
    return fact;
  } catch (err) {
    console.error(err);
  }
};

window.onload = start;

function start() {
  cardLoad("1");
  cardLoad("2");
  document
    .getElementById("card1")
    .addEventListener("click", () => cardLoad("2"));
  document
    .getElementById("card2")
    .addEventListener("click", () => cardLoad("1"));
  // fetchAPI();
}

const click = (card) => {
  console.log("click", card);
};

const cardLoad = async (id) => {
  if (cont < 20) {
    cont += 1;
    let text;
    document.getElementById(
      "info"
    ).innerText = `Elegí tu favorito clickeandolo, intento ${cont - 1}/20`;
    image = await fetchImage();
    fact = await fetchFact();
    document.getElementById(id).src = image;
    id === "1" ? (text = "firstText") : (text = "secondText");
    document.getElementById(text).innerText = fact;
    blurr(id);
  } else if (cont >= 20) {
    document.getElementById(
      "info"
    ).innerText = `Tu gatito favorito fue este 😻️`;
    removeElement(id);
  }
};

const blurr = (id) => {
  document.getElementById(id).setAttribute("style", "  filter: blur(8px)");
  setTimeout(() => {
    document.getElementById(id).setAttribute("style", "  filter: none");
  }, 1000);
};

const removeElement = (id) => {
  id === "1" ? (col = "col1") : (col = "col2");
  document.getElementById(col).remove();
};
