const precoCombustivel = 3.58;
const kmPorLitro = 10;
const distanciaKm = 100;


const valorGasto = (distanciaKm / kmPorLitro) * precoCombustivel;

console.log(valorGasto.toFixed(2));
