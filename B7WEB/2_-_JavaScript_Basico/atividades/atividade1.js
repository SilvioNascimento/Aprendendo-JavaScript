/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100

let x = 40
let y = 10
let porcentagem = calcPct(x, y)
console.log(`${porcentagem}% de ${x} é ${y}`)
*/

function calcPct(x, y) {
    let resultadoPct = (y / x) * 100;
    return resultadoPct
}


let x = 40;
let y = 10;
let porcentagem = calcPct(x, y);
console.log(`${porcentagem}% de ${x} é ${y}`);


let u = 750;
let v = 150;
let porcentagem1 = calcPct(u, v);
console.log(`${porcentagem1}% de ${u} é ${v}`);

