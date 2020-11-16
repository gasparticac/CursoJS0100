const deleteDuplicated = (array) => {
    const newArray = new Array;
    for (i = 0; i < array.length; i++){
        newArray.includes(array[i])? null : newArray.push(array[i]);
    }
    return newArray;
}
