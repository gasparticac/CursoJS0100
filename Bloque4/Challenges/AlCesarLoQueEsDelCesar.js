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