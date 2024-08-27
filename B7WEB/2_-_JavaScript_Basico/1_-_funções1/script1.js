function exibirMensagem() {
    console.log("Olá, pessoal!")
}


function gravidade() {
    console.log("A gravidade do planeta Terra é " + 9.8);
}


function somar(n1, n2) {
    if((!isNaN(n1) && !isNaN(n2)) && (typeof n1 === "number" && typeof n2 === "number")) {
        let resultado = n1 + n2;
        return resultado;
    } else {
        console.error("O(s) valor(es) inserido(s) não é number!")
        return null;
    }
}


exibirMensagem();
gravidade();
console.log(somar(3,5));
console.log(somar('1', 3));