function escrevaMeuNome(nome) {
  return 'Olá!! Meu nome é ' + nome;
}


function verificarIdade(idade, nome) {
  console.log(escrevaMeuNome(nome));
  if (idade < 18) {
    console.log('Ainda não sou maior de idade, pois tenho ' + idade + ' anos.')
  } else {
    console.log('Já sou maior de idade, pois tenho ' + idade + ' anos.')
  }
}


verificarIdade(18, 'Silvio');
