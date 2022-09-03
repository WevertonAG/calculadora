let valorIncial = '';
function getTeclas(numero){
  
  let resultado = document.querySelector('#resultado').innerHTML;
  document.querySelector('#resultado').innerHTML = resultado + numero
}
function limpa(){
  return resultado.innerText = valorIncial;
}
function back(){
  let resultado = document.querySelector('#resultado').innerHTML;
  document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function resultadoFinal(){
  let resultado = document.querySelector('#resultado').innerHTML;
  if(resultado){
    document.querySelector('#resultado').innerHTML = eval(resultado)
  }
}