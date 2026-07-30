function verificarIdade(idade) {
  if (idade < 18) {
    console.log('Você ainda não é maior de idade, pois tem ' + idade + ' anos.')
  } else {
    console.log('Você já é maior de idade, pois tem ' + idade + ' anos.')
  }
}

verificarIdade(2);