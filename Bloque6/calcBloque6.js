let result = 0;

const operation = (value) => {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  console.log(number1, number2);
  value === "+" ? (result = number1 + number2) : (result = number1 - number2);
  alert(`El resultado es: ${result}`);
  setTimeout(() => clean(result), 2000);
};

const clean = (operation) => {
  document.getElementById("number1").value = 0;
  document.getElementById("number2").value = 0;
};
