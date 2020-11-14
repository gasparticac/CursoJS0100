const getAvg = (numbers) => {
    let acum = 0;
    for (let i = 0; i < numbers.length; i++) {
        acum += numbers[i];
    }
    let avg = acum / numbers.length;
    return avg;
} 