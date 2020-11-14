const add = () =>{
    let QNUMBERS = 5;
    let acum=0;
    for (let i = 0; i < QNUMBERS; i++) {
        acum += parseFloat(prompt("Ingrese un número para sumar"));
    }
    return acum;
}