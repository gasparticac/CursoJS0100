fetch("psw.txt")
  .then((response) => response.text())
  .then((text) => {
    const test = (array = text) => {
      arr1 = array.split(/[\n]/);
      let q = 0;
      let qn = 0;
      const badArray = new Array();

      for (line in arr1) {
        let min = 0;
        let max = 0;
        let expression = "";
        let cont = 0;
        let matcherSplitted = "";

        letras = arr1[line].split(/[ -]+/);
        for (letra of letras) {
          if (letra.match(/[1-99]/)) {
            min == 0 ? (min = letra) : (max = letra);
          } else if (letra.match(/[a-z]/)) {
            expression == ""
              ? (expression = letra.slice(0, -1))
              : (matcherSplitted = letra);
          }
        }
        for (character of matcherSplitted) {
          character === expression ? (cont += 1) : null;
        }
        (cont >= min && cont <= max) || (cont <= min && cont >= max)
          ? (q += 1)
          : null;
      }
      console.log("cantidad ok", q);
    };
    test(text);
  });
