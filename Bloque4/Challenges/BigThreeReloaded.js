const getBigger = (numbers) =>{
    let bigger = 0;
    for (let i = 0;  i< numbers.length; i++) {
        numbers[i] > bigger ? bigger = numbers[i] : null;
    }
    return bigger;
}