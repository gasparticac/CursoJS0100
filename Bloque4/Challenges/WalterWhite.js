const qWhite = (string) =>{
    let accum = 0;
    const splitted = string.split("");
    splitted.forEach(element => {
        element == " "? accum += 1 : null;
    });
    return accum;
  }
  