//adiciona a seleção de elemento a variável botaoConverter
let botaoConverter = document.querySelector('#converter')

//adiciona um evento de clique no botaoConverter
botaoConverter.addEventListener('click', function(e){
    
    let celsius = document.querySelector('#celsius').value
    console.log(celsius)

    let fahrenheit = document.querySelector('#fahrenheit').value
    console.log(fahrenheit)

    //calculo de teste
    let cToFahr = celsius * 9 / 5 + 32;
    console.log(cToFahr)

    //joga o resultado do calculo de teste dentro da div result
    let result = document.getElementById('result').textContent = `${cToFahr + 'ºC'}`


})


//função para pegar o valor do option e realizar o teste condicional
function getSelectValue() {
        var selectedValue = document.getElementById("list").value;
        let valor = selectedValue
    
        //se o valor for igual a 0
        if(valor == 0){
          console.log('ESCOLHA UMA DAS OPÇÕES')
    
        //senão se o valor for igual a 1
        } else if (valor == 1) {
          console.log('CELSIUS')
            
          
        //senão o valor for igual a 2
        }else if(valor == 2) 
          console.log('Fahrenheit')
}

//chamada da função acima
getSelectValue();



 