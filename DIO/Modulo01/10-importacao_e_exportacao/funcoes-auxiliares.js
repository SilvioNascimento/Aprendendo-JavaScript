function gets() {
  return 10;
}


function print(texto) {
  console.log(texto);
}


//Exportar funções específicas deste arquivo para que outros arquivos consigam importar as funções 
// descritas dentro do objeto
module.exports = {
  gets, 
  print
};

//Outra forma de exportar (exportar funções individualmente)
//module.exports.gets = gets;
//module.exports.print = print;