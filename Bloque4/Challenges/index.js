const getThreeNumbers = () =>{
    const array = new Array;
    for (i = 0; i < 3; i++){
        array.push(parseFloat(prompt(`Type 3 numbers (${i+1}/3)`)));
    }
    return array;
}

const getString = () => {
    const string = prompt("Type any text");
    return string;
}

const getArray = () => {
    const array = new Array;
    while (!(array.includes(""))) {
        array.push(prompt("Type an element of the array, to finish leave empty"))
    }
    array.pop();
    return array;
}

const getBigger = (numbers) =>{
    let bigger = 0;
    for (let i = 0;  i< numbers.length; i++) {
        numbers[i] > bigger ? bigger = numbers[i] : null;
    }
    return bigger;
}

const getAvg = (numbers) => {
    let acum = 0;
    for (let i = 0; i < numbers.length; i++) {
        acum += numbers[i];
    }
    let avg = acum / numbers.length;
    return avg;
} 

const add = () =>{
    let QNUMBERS = 5;
    let acum=0;
    for (let i = 0; i < QNUMBERS; i++) {
        acum += parseFloat(prompt(`Type a number (${i+1}/${QNUMBERS})`));
    }
    return acum;
}

const arrayAddition = (array1,array2) => {
    let newArray = array1.concat(array2);
    return newArray;
}

const getUnique = (array1, array2) =>{
    const array = new Array;
    for (let i = 0; i < array1.length; i++) {
        array2.includes(array1[i])? null : array.push(array1[i]);
    }
    return array;
}

const deleteDuplicated = (array) => {
    const newArray = new Array;
    for (i = 0; i < array.length; i++){
        newArray.includes(array[i])? null : newArray.push(array[i]);
    }
    return newArray;
}

const qChar = (string) =>{
    let accum = 0;
    const splitted = string.split("");
    splitted.forEach(element => {
        accum += 1;
    });
    return accum;
}

const qWhite = (string) =>{
    let accum = 0;
    const splitted = string.split("");
    splitted.forEach(element => {
        element == " "? accum += 1 : null;
    });
    return accum;
  }
  
const capitalize = (string) =>{
    const capitalized = new Array;
    for (i = 0; i < string.length ; i++){
        i == 0 || string[i - 1] == " "? capitalized.push(string[i].toUpperCase()) : capitalized.push(string[i]);
    }
return capitalized.join("");
}

const toArray = (string) => {
    splitted = string.split("");
    return splitted;
}

const CaesarShifting = (shift, string) =>{
    const lowerCased = string.toLowerCase();
    const arrayOutput = new Array;
    for (i= 0; i < lowerCased.length; i++){
        let newLetter = (lowerCased[i].charCodeAt(0)) + shift;
        newLetter >= 123 ? newLetter -= 26 : null;
        arrayOutput.push(String.fromCharCode(newLetter));
    }
    return arrayOutput;
}
  