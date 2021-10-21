//adiciona a seleção de elemento a variável botaoConverter
let botaoConverter = document.querySelector('#converter')

//função para pegar o valor do option e realizar o teste condicional
function getSelectValue() {
  
  //adiciona um evento de clique no botaoConverter
  botaoConverter.addEventListener('click', function(e){
    
    //adiciona os elementos selecionados em variáveis
    let valorTemp = document.querySelector('#celsius').value;
    let selectedValue = document.getElementById("list").value;
    let valor = selectedValue

      //se o valor for igual a 0 ou vazio
      if(valor == 0 || valor == ''){
        alert('ESCOLHA UMA DAS OPÇÕES')
        
      //senão se o valor for igual a 1
      } else if (valor == 1) {
          //altera o texto do elemento selecionado para Celsius
          let trocaTexto = document.getElementById('trocatexto').textContent = 'Celsius'

          //conversão de Fahrenheit para Celsius
          let fToCel = (valorTemp - 32) * 5 / 9;
          let result = document.getElementById('result').textContent = `${fToCel.toFixed(2) + 'ºC'}`

        
        //senão se o valor for igual a 2 
      } else if (valor == 2) {
          //altera o texto do elemento selecionado para Fahrenheit
          let trocaTexto = document.getElementById('trocatexto').textContent = 'Fahrenheit'
          
          //conversão de Celsius para Fahrenheit
          let cToFahr = valorTemp * 9 / 5 + 32;
          //joga o resultado do calculo dentro da div result
          let result = document.getElementById('result').textContent = `${cToFahr.toFixed(2) + 'ºF'}`
      }
  })
}

//chamada da função acima
getSelectValue();



 