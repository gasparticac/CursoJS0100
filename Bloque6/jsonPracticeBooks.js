let min = 0,
  max = 0;

const books = [
  {
    title: {
      _lang: "en",
      __text: "Everyday Italian",
    },
    author: "Giada De Laurentiis",
    year: "2005",
    price: "30.00",
    _category: "COOKING",
  },
  {
    title: {
      _lang: "en",
      __text: "Harry Potter",
    },
    author: "J K. Rowling",
    year: "2005",
    price: "29.99",
    _category: "CHILDREN",
  },
  {
    title: {
      _lang: "en",
      __text: "XQuery Kick Start",
    },
    author: [
      "James McGovern",
      "Per Bothner",
      "Kurt Cagle",
      "James Linn",
      "Vaidyanathan Nagarajan",
    ],
    year: "2003",
    price: "49.99",
    _category: "WEB",
  },
  {
    title: {
      _lang: "en",
      __text: "Learning XML",
    },
    author: "Erik T. Ray",
    year: "2003",
    price: "39.95",
    _category: "WEB",
  },
];
// ¿Cuántos libros hay en la librería?
// Pide un límite inferior y superior (a través de inputs)  para el precio y muestra todos los libros cuyo precio esta en ese intervalo (al tocar un botón).
// Pide un titulo a través de un input, y muestra el título y el año de publicación de los libros cuyo título empiece por la cadena introducida.
// Muestra todos los títulos de los libros con la lista de sus autores.

const getBooks = (array = books) => {
  return array.length;
};

const pricerGet = (e) => {
  e.id === "max" ? (max = e.value) : (min = e.value);
};

const pricerCalc = (array = books) => {
  const newArr = new Array();
  const element = document.getElementById("textarea");
  array.forEach((element) => {
    let elementPrice = parseFloat(element.price);
    elementPrice >= min && elementPrice <= max
      ? newArr.push(element.title.__text)
      : null;
  });
  element.value = `Los libros dentro del rango de precios seleccionado son:
${newArr.join(`,
`)}`;
};

const titleFilter = (e, array = books) => {
  document.getElementById("max").value = "";
  document.getElementById("min").value = "";
  let string;
  const newArr = new Array();
  const element = document.getElementById("textarea");
  e.id === "title" ? (string = e.value.toLowerCase()) : null;
  array.forEach((element) => {
    let elementTitle = element.title.__text.toLocaleLowerCase();
    elementTitle.includes(string)
      ? newArr.push([element.title.__text, element.year])
      : null;
  });
  element.value = newArr.join(`
`);
};
