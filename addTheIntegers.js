
function sumOfInterger(num) {
    if (Number.isInteger(num) && num > 0) {
      let sum = 0;
      for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
        }
      }
      console.log("A soma dos valores divisíveis por 3 ou 5 é:", sum);
    } else {
      console.log("É necessário adicionar um número inteiro positivo, diferente de 0!");
    }
  }
  
  sumOfInterger(10);
