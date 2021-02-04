let passports;

fetch("challenge4.txt") //función para obtener los datos de pasaporte a partir del archivo challenge4.txt
  .then((response) => response.text())
  .then((text) => {
    passports = text;
    getPassport(passports);
  });

//forma un array de objetos (pasaportes)
const getPassport = (passports) => {
  let data = new Object();
  let qPassports = 0;
  const array = new Array();

  let organizedPassports = passports.split(/\n\n/); //crea un objeto con los pasaportes como entrada

  for (entry of organizedPassports) {
    cleanPassports = entry.replace(/(\r\n|\n|\r)/gm, " ").split(/\b \b/); //recorre cada elemento (pasaporte) y lo ordena quitándole los newline y carrierreturn
    for (item of cleanPassports) {
      //recorro cada item y lo separo por clave-valor
      keyValue = item.split(":");
      let key = keyValue[0];
      let value = keyValue[1];
      data[key] = value; // agrego al objeto data ese key-value
    }
    array.push(data);
    data = {};
    qPassports += 1;
  }
  console.log("cantidad de pasaportes", qPassports);
  validator(array);
};

//check si existen todos los campos para cada objeto dentro del array
const validator = (array) => {
  let valid = 0;
  for (element in array) {
    flag = false;
    array[element].hasOwnProperty("hgt") ? null : (flag = true);
    array[element].hasOwnProperty("byr") ? null : (flag = true);
    array[element].hasOwnProperty("ecl") ? null : (flag = true);
    array[element].hasOwnProperty("pid") ? null : (flag = true);
    array[element].hasOwnProperty("iyr") ? null : (flag = true);
    array[element].hasOwnProperty("eyr") ? null : (flag = true);
    array[element].hasOwnProperty("hcl") ? null : (flag = true);
    flag === true ? null : (valid += 1);
  }
  console.log("validos", valid);
};
