//function
// getElementByld
//addEventListner

//-----------------------QUESTAO 1 -----------------//

function exemplo1() { // a funcao comeca aqui
    //ESCREVA O ENUNCIADO AQUI
    //SOME 2 numeros
    const numero = Number(prompt("digite um numero:"))
    const numero2 = Number(prompt("digite outro numero:"))
    alert(numero+numero2)
} // termina aqui
const buttonExemplo1 = document.getElementById("questao1")
buttonExemplo1.addEventListener('click',() => { exemplo1() })

//-----------------------QUESTAO 2 -----------------//


function exemplo2() { // a funcao comeca aqui
    //ESCREVA O ENUNCIADO AQUI
    //SOME 2 numeros
    alert("funcionou aqui")

} // termina aqui
const buttonExemplo2 = document.getElementById("questao2")
buttonExemplo2.addEventListener('click',() => { exemplo2() })