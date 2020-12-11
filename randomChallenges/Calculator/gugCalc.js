window.onload = start;
let mostrarInput = new Array();
let inv = 0;
let ansVal;

function start() {
  document.getElementById("1").addEventListener("click", () => inputText("1"));
  document.getElementById("2").addEventListener("click", () => inputText("2"));
  document.getElementById("3").addEventListener("click", () => inputText("3"));
  document.getElementById("4").addEventListener("click", () => inputText("4"));
  document.getElementById("5").addEventListener("click", () => inputText("5"));
  document.getElementById("6").addEventListener("click", () => inputText("6"));
  document.getElementById("7").addEventListener("click", () => inputText("7"));
  document.getElementById("8").addEventListener("click", () => inputText("8"));
  document.getElementById("9").addEventListener("click", () => inputText("9"));
  document.getElementById("0").addEventListener("click", () => inputText("0"));
  document
    .getElementById("pi")
    .addEventListener("click", () => inputText(Math.PI));
  document.getElementById("e").addEventListener("click", () => inputText("e"));
  document.getElementById("ans").addEventListener("click", () => ans());
  document
    .getElementById("sin")
    .addEventListener("click", () => inputText("sin("));
  document
    .getElementById("cos")
    .addEventListener("click", () => inputText("cos("));
  document
    .getElementById("tan")
    .addEventListener("click", () => inputText("tan("));
  document
    .getElementById("exp")
    .addEventListener("click", () => inputText("E"));
  document.getElementById("x!").addEventListener("click", () => inputText("!"));
  document
    .getElementById("ln")
    .addEventListener("click", () => inputText("ln"));
  document
    .getElementById("log")
    .addEventListener("click", () => inputText("log"));
  document
    .getElementById("sqrt")
    .addEventListener("click", () => inputText("√"));
  document
    .getElementById("exponencial")
    .addEventListener("click", () => inputText("^"));
  document.getElementById("(").addEventListener("click", () => inputText("("));
  document.getElementById(")").addEventListener("click", () => inputText(")"));
  document.getElementById(".").addEventListener("click", () => inputText("."));
  document.getElementById("%").addEventListener("click", () => inputText("%"));
  document.getElementById("ac").addEventListener("click", () => ac());
  document.getElementById("/").addEventListener("click", () => inputText("/"));
  document.getElementById("x").addEventListener("click", () => inputText("*"));
  document.getElementById("-").addEventListener("click", () => inputText("-"));
  document.getElementById("+").addEventListener("click", () => inputText("+"));
  document.getElementById("=").addEventListener("click", () => result());
  document.getElementById("inv").addEventListener("click", () => inverter());
}

const inputText = (element) => {
  const generalInput = document.getElementById("generalInput");
  if (generalInput.value == 0) {
    //si esta vacio
    if (
      !isNaN(element) ||
      element === "ln" ||
      element === "√" ||
      element === "cos(" ||
      element === "sin(" ||
      element === "tan(" ||
      element === "^" ||
      element === "log"
    ) {
      //entra cuando es un numero
      if (inv % 2 == 1) {
        switch (element) {
          case "sin(":
            element = "asin(";
            break;
          case "cos(":
            element = "acos(";
            break;
          case "ln":
            mostrarInput.push(Math.E);
            element = "^";
            break;
          case "√":
            element = "^";
            mostrarInput.push("2");
            break;
          case "^":
            console.log("entra");
            element = "ʸ√";
            console.log(mostrarInput, element);
          case "log":
            element = "^";
            mostrarInput.push("10");
            break;
          default:
            break;
        }
      }
      if (element != "log") {
        mostrarInput.push(element);
        generalInput.value = mostrarInput.join("");
      }
    } else {
      null;
    }
  } else if (generalInput.value != 0) {
    if (isNaN(element)) {
      if (element != "log") {
        isNaN(mostrarInput[mostrarInput.length - 1])
          ? mostrarInput.pop()
          : null;
      }
    }
    if (inv % 2 == 1) {
      switch (element) {
        case "sin(":
          element = "asin(";
          break;
        case "cos(":
          element = "acos(";
          break;
        case "ln":
          mostrarInput.push(Math.E);
          element = "^";
          break;
        case "√":
          element = "^";
          break;
        case "^":
          element = "ʸ√";
          break;
        case "log":
          mostrarInput.push(10);
          element = "^";
          break;
        default:
          break;
      }
    }
    if (element != "log") {
      mostrarInput.push(element);
    }
    element === "√" ? mostrarInput.push("2") : null;
  }
  generalInput.value = mostrarInput.join("");
};

const ac = () => {
  const generalInput = document.getElementById("generalInput");
  ansVal = mostrarInput;
  generalInput.value = "0";
  mostrarInput = [];
};

const result = (array = mostrarInput) => {
  let cont = 0;
  const operators = new Array();
  const a1 = {};
  for (item of array) {
    if (!isNaN(item)) {
      if (a1[cont] === undefined) {
        a1[cont] = item;
      } else {
        a1[cont] += item;
      }
    } else {
      operators.push(item);
      cont += 1;
    }
  }
  operation(a1, operators);
};

const operation = (array, operator) => {
  let result = 0;
  for (item in array) {
    if (result === 0) {
      result = parseFloat(array[item]) || 0;
      if (array[item + 1] === undefined) {
        if (operator[item] === "%") {
          result /= 100;
        } else if (operator[item] === "!") {
          result = factorialize(result);
        } else if (operator[item - 1] === "ln") {
          result = Math.log(result);
        } else if (operator[item - 1] === "√") {
          result = Math.sqrt(result);
        } else if (operator[item - 1] === "tan(") {
          result = Math.tan(result);
        } else if (operator[item - 1] === "cos(") {
          result = Math.cos(result);
        } else if (operator[item - 1] === "sin(") {
          result = Math.sin(result);
        } else if (operator[item - 1] === "sin1(") {
          result = Math.asin(result);
        } else if (operator[item - 1] === "cos1(") {
          result = Math.acos(result);
        } else if (operator[item - 1] === "tan1(") {
          result = Math.atan(result);
        } else if (operator[item - 1] === "log") {
          dontDo();
        }
        continue;
      }
    }

    switch (operator[item - 1]) {
      case "+":
        result += parseFloat(array[item]);
        break;
      case "-":
        result -= parseFloat(array[item]);
        break;
      case "*":
        result *= parseFloat(array[item]);
        break;
      case "/":
        result /= parseFloat(array[item]);
        break;
      case "%":
        result *= array[item];
        break;
      case ".":
        result += array[item] / 10;
        break;
      case "!":
        result = factorialize(result);
        break;
      case "ln":
        result = Math.log(result);
      case "√":
        result = Math.sqrt(result);
        break;
      case "cos(":
        result = Math.cos(result);
        break;
      case "sin(":
        result = Math.sin(result);
        break;
      case "tan(":
        result = Math.tan(result);
        break;
      case "^":
        result = result ** array[item];
        break;
      case "E":
        result = exp(result, array[item]);
        break;
      case "cos1(":
        result = Math.acos(result);
        break;
      case "sin1(":
        result = Math.asin(result);
        break;
      case "tan1(":
        result = Math.atan(result);
        break;
      case "ʸ√":
        result = Math.pow(result, 1 / array[item]);
        break;
      case "log":
        dontDo();
        break;
      default:
        break;
    }
  }
  mostrarInput = [result];
  document.getElementById("generalInput").value = result;
};

const factorialize = (num) => {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
};

const exp = (num, n) => {
  console.log("datos en EXP", num, n);
  let result = num;
  for (i = 1; i <= n; i++) {
    result = result * 10;
  }
  return result;
};

const inverter = () => {
  switch (inv % 2) {
    case 0:
      inv++;
      document.getElementById("sin").innerText = "sin⁻¹";
      document.getElementById("cos").innerText = "cos⁻¹";
      document.getElementById("tan").innerText = "tan⁻¹";
      document.getElementById("ln").innerText = "eˣ";
      document.getElementById("log").innerText = "10ˣ";
      document.getElementById("sqrt").innerText = "x²";
      document.getElementById("exponencial").innerText = "ʸ√x";
      document.getElementById("ans").innerText = "Rnd";
      break;
    case 1:
      inv++;
      document.getElementById("sin").innerText = "sin";
      document.getElementById("cos").innerText = "cos";
      document.getElementById("tan").innerText = "tan";
      document.getElementById("ln").innerText = "ln";
      document.getElementById("log").innerText = "log";
      document.getElementById("sqrt").innerText = "√";
      document.getElementById("exponencial").innerText = "xʸ";
      document.getElementById("ans").innerText = "Ans";
      break;
  }
};

const ans = () => {
  generalInput = document.getElementById("generalInput");
  if (inv % 2 === 0) {
    mostrarInput.push(ansVal || "");
    generalInput.value += ansVal || "";
  } else if (inv % 2 === 1) {
    mostrarInput.push(Math.random());
    generalInput.value = mostrarInput.join("");
  }
};

const dontDo = () => {
  console.log("entro");
};
