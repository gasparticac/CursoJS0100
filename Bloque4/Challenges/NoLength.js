const qChar = (string) =>{
    let accum = 0;
    const splitted = string.split("");
    splitted.forEach(element => {
       accum += 1;
    });
    return accum;
}
