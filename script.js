//Variaveis globais
var valorC = ""
var KelvinFinal = ""
let KelOuFah = ""
var FahFinal = ""

function Celcius() {
    valorC = prompt("Qual a temperatura em C?")
}

function Calculo() {
KelOuFah = prompt ("Kelvin ou Fahrenheit?")
if(KelOuFah === "Kelvin"){

KelvinFinal = parseInt(valorC) + 273

alert ("A temperatura em celcius para kelvin seria igual a = " + KelvinFinal)
} else if (KelOuFah === "Fahrenheit"){
parseInt(valorC)

FahFinal = valorC*9/5 +32
alert("A temperatura em celcius para fahrenheit seria igual a = ")

}
}