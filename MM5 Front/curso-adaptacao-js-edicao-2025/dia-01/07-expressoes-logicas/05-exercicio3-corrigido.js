let ano = 2025;

let divisivelPor100 = (ano % 4 === 0) && (ano % 100 !== 0);
let divisivelPor400 = ano % 400 === 0;
let ehBissexto = divisivelPor100 || divisivelPor400;

console.log("O Ano ", ano, " é Bissexto? " + ehBissexto);
