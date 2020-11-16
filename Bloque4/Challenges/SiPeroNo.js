const getUnique = (array1, array2) =>{
    const array = new Array;
    for (let i = 0; i < array1.length; i++) {
        array2.includes(array1[i])? null : array.push(array1[i]);
    }
    return array;
}