

const reverseador = (string) => {
    const array = [];
    for (let i = string.length; i >= 0; i--) {
        array.push(string[i]);        
    }
    return array;
}



const cargaNombres = (cantNombres) => { //le paso 3
    nombres = new Array;
    for (let i = 0; i < cantNombres; i++) {
        nombres.push(prompt("Ingrese nombre"));
    }
    return nombres;
}

const cargaNotas = (cantNotas) => { //le paso 3
    nota = new Array;
    for (let i = 0; i < cantNotas.length; i++) {
        nota.push(prompt(`Ingrese la nota del alumno ${cantNotas[i]}`));
    }
    return nota;
}

const muestraNotas = (alumnos, notas) =>{
    document.write(`Libreta de notas<br>`);
    for (let i = 0; i < alumnos.length; i++) {
        document.write(`nombre ${alumnos[i]}, nota: ${notas[i]}<br>`);        
    }
}

const mayorNota = (alumnos,notas) => {
    let max = 0;
    for (let i = 0; i < notas.length; i++) {
        notas[i]>= max? max = alumnos[i] : null; 
    }
    return max;
}
const menorNota = (alumnos,notas) => {
    let min = 10;
    for (let i = 0; i < notas.length; i++) {
        notas[i]<= min? min = alumnos[i] : null; 
    }
    return min;
}

const sacaPromedio = (notas) => {
    let acum = 0;
    for (let i = 0; i < notas.length; i++) {
        acum += parseFloat(notas[i]);
    }
    return (acum/notas.length);
}