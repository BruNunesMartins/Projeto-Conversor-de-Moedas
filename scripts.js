/*   ////console.log("funcionou?")//////   Para testar se está conectado com meu html*/

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {  /*FUNÇÃO: quando eu chamar essa funçaõ quero que converta esses valores*/
    /*console.log("Funcionou") console.log para eu ter certeza que estou chamando a minha função*/


    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value")     /*Valor em Real*/
    const currencyValueConverted = document.querySelector(".currency-converted") /*Valor  convertido*/


console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.3



if(currencySelect.value == "dolar"){ // Se o select estiver selecionado o valor de dólar, entre aqui*/
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD"
    }).format(inputCurrencyValue / dolarToday)


}

if(currencySelect.value == "euro"){// Se o select estiver selecionado o valor de euro, entre aqui*/
currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
style: "currency", currency: "EUR"
}).format(inputCurrencyValue/euroToday)


}

    /*innerHTML - trocar texto*/
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { /*formatação dos números em Real*/
        style: "currency", currency: "BRL"
    }).format(inputCurrencyValue)


 


    /*currencyValueConverted.innerHTML = convertedValue

    console.log(convertedValue)*/

}



function changeCurrency (){
const currencyName = document.getElementById("currency-name")
currencyImg = document.querySelector(".currency-img")



if(currencySelect.value == "dolar"){
currencyName.innerHTML = "Dólar americano"
currencyImg.src = "./assets/dolar.png"

}

if(currencySelect.value == "euro"){
currencyName.innerHTML = "Euro"
currencyImg.src = "./assets/euro.png"

}

convertValues()

}






currencySelect.addEventListener("change",changeCurrency )

convertButton.addEventListener("click", convertValues) /*  OUVINTE(addEventListenet) - MEU BOTAO (convertButton)- CLICK (qdo ele é clicado) - OBJETIVO(convertValues) toda vez que for clicado ele converte os valolres
*/



