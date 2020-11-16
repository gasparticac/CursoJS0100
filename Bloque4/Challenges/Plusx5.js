const add = () =>{
    let QNUMBERS = 5;
    let acum=0;
    for (let i = 0; i < QNUMBERS; i++) {
        acum += parseFloat(prompt(`Type a number (${i+1}/${QNUMBERS})`));
    }
    return acum;
}