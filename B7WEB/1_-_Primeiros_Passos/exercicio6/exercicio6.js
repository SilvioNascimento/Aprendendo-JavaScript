let idade = Number(prompt("Digite sua idade: "))
console.log(idade)

if (!isNaN(idade)){
    if (idade > 18) {
        alert("Você já é MAIOR de idade!")
    } else if (idade === 18) {
        alert("Você se tornou maior de idade!")
    } else {
        alert("Você ainda é MENOR de idade!")
    }
} else {
    alert("Digite um valor numérico inteiro")
}