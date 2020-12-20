function notas(valor){
  let n100 = 0;
  let n50 = 0;
  let n20 = 0;
  let n10 = 0;
  let n5 = 0;
  let n2 = 0;
  let n1 = 0;
  let resto = 0;
  const value = parseInt(valor);

  if((value/100) > 0) {
    n100 = parseInt(value/100);
    resto = value % 100;
  }
  if((resto/50) > 0) {
    n50 = parseInt(resto/50);
    resto = resto % 50;
  }
  if((resto/20) > 0) {
    n20 = parseInt(resto/20);
    resto = resto % 20;
  }
  if((resto/10) > 0) {
    n10 = parseInt(resto/10);
    resto = resto % 10;
  }
  if((resto/5) > 0) {
    n5 = parseInt(resto/5);
    resto = resto % 5;
  }
  if((resto/2) > 0) {
    n2 = parseInt(resto/2);
    resto = resto % 2;
  }
  if((resto/1) > 0) {
    n1 = parseInt(resto/1);
    resto = resto % 1;
  }

  console.log(value);
  console.log(`${n100} nota(s) de R$ 100,00`);
  console.log(`${n50} nota(s) de R$ 50,00`);
  console.log(`${n20} nota(s) de R$ 20,00`);
  console.log(`${n10} nota(s) de R$ 10,00`);
  console.log(`${n5} nota(s) de R$ 5,00`);
  console.log(`${n2} nota(s) de R$ 2,00`);
  console.log(`${n1} nota(s) de R$ 1,00`);
}

function kmPorLitro(){
  let km = parseInt(gets());
  let litros = parseFloat(gets());
  console.log(`${(km/litros).toFixed(3)} km/l`);
}

// kmPorLitro();
// notas(221);