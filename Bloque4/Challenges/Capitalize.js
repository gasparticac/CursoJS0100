const capitalize = (string) =>{
    const capitalized = new Array;
    for (i = 0; i < string.length ; i++){
        i == 0 || string[i - 1] == " "? capitalized.push(string[i].toUpperCase()) : capitalized.push(string[i]);
    }
    return capitalized.join("");
  }
  