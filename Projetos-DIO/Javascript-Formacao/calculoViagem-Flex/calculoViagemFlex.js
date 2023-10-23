const precoEtanol = 3.58;
const precoGasolina = 5.39;
const kmPorLitro = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaKm / kmPorLitro;
let valorGasto;

if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
} else {
    valorGasto = litrosConsumidos * precoGasolina;
}

console.log(valorGasto.toFixed(2));
