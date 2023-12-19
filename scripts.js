
const convertButton = document.querySelector(".convert-button") /*mapeando meu botão de conversão*/
const currencySelect = document.querySelector(".currency-select")


function convertValues() { /*funçaõ*/
    const inputCurrencyValue = document.querySelector(".input-currency").value /*capturar o valor do meu input*/
    const currencyValueToConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-converted")




    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.5
    const realtoday = 1.0


    


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)


    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        })

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { /*lingua e localidade*/
        style: "currency",
        currency: "BRL" /*sigla da moeda*/
    }).format(inputCurrencyValue)




}


function changeCurrency() {/*toda vez que trocar de moeda eu chamo essa função*/
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assests/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }


}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) /*ouvinte do meu botão quando ele é clicado---toda vez que ele for clicado ele chama a função acima*/



