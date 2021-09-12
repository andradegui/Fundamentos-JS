const peso1 = 1.0;
const peso2 = Number('2.0'); //outro tipo de declarar number

console.log(Number.isInteger(peso2)); //verifica se o tipo do dado é inteiro

const avaliacao1 = 9.903;
const avaliacao2 = 6.872;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //determina quantos números vc quer após a vírgula
console.log(media.toString(2)); //converte em binário
console.log(typeof media);

/*
Number = função
number = tipo de dado
*/