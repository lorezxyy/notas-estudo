
// exercicio 1
// 1. peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado

function exercicio1() {

    const numero = Number(prompt("digite um numero"))
    const outroNumero = Number(prompt("digite outro numero"))
    alert(numero + outroNumero)
}
const buttonExercicio1 = document.getElementById("exercicio1")
buttonExercicio1.addEventListener('click', () => { exercicio1() })

// exercicio 2 
// 2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
function exercicio2() {

    alert("teste exercicio 2")
    const valorHor = Number(prompt("Digite alor da hora "))
    const horaTrabalhada = Number(prompt("Digite as horas trabalhadas"))
    const resultado = valorHor * horaTrabalhada
    alert(valorHor + horaTrabalhada)
}

const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })

// exercicio 3 
// 3. Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.

function exercicio3() {

    const pessoa1 = Number(prompt("Digite o peso da pessoa 1:"))
    const pessoa2 = Number(prompt("Digite o peso da pessoa 2:"))
    const pessoa3 = Number(prompt("Digite o peso da pessoa 3:"))
    const pessoa4 = Number(prompt("Digite o peso da pessoa 4:"))
    const pessoa5 = Number(prompt("Digite o peso da pessoa 5:"))
    alert((pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5) / 5)
}
const buttonExercicio3 = document.getElementById("exercicio3")
buttonExercicio3.addEventListener('click', () => { exercicio3() })

// exercicio 4
//4. Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
function exercicio4() {

    const celsios = Number(prompt("digite valor celsios"))
    alert((9 * celsios + 160) / 5) = Number
}

const buttonExercicio4 = document.getElementById("exercicio4")
buttonExercicio4.addEventListener('click', () => { exercicio4() })

// exercicio 5
// 5. Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
function exercicio5() {

    const Kilometro = Number(prompt("coloque a kilometragem"))
    alert((Kilometro * 1.6093))
}
const buttonExercicio5 = document.getElementById("exercicio5")
buttonExercicio5.addEventListener('click', () => { exercicio5() })

// exercicio 6
// 6. Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.
function exercicio6() {

    const segundos = Number(prompt("ponha a duraçao em segundos"))

    const resultadoSeg = 1 / segundos
    alert(resultadoSeg)
    const resultadoMin = segundos / 60
    alert(resultadoMin)
    const resultadoHr = resultadoMin / 60
    alert(resultadoHr)
}
const buttonExercicio6 = document.getElementById("exercicio6")
buttonExercicio6.addEventListener('click', () => { exercicio6() })

// exercicio 7
// 7. Peça uma distância em quilômetros e converta para metros e centímetros.
function exercicio7() {

    const km = Number(prompt("digite uma distancia em km"))
    const resultado1 = (km * 1000)
    alert(resultado1)
    const resultado2 = (km * 100000)
    alert(resultado2)
}

const buttonExercicio7 = document.getElementById("exercicio7")
buttonExercicio7.addEventListener('click', () => { exercicio7() })

// exercicio 8
// 8. Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).
function exercicio8() {


    const numero = Number(prompt("digite um numero"))
    alert(numero * 0)
    alert(numero * 1)
    alert(numero * 2)
    alert(numero * 3)
    alert(numero * 4)
    alert(numero * 5)
    alert(numero * 6)
    alert(numero * 7)
    alert(numero * 8)
    alert(numero * 9)
    alert(numero * 10)
}
const buttonExercicio8 = document.getElementById("exercicio8")
buttonExercicio8.addEventListener('click', () => { exercicio8() })

//exercicio 9
// 9. Peça três notas de um aluno, calcule a média e informe:

//"Aprovado" se a média for maior ou igual a 7
//"Recuperação" se for maior ou igual a 5 e menor que 7
//"Reprovado" se for menor que 5

function exercicio9() {

    const nota1 = Number(prompt("digite a primeira nota"))
    const nota2 = Number(prompt("digite a segunda nota"))
    const nota3 = Number(prompt("digite a terceira nota"))

    const media = (nota1 + nota2 + nota3) / 3
    console.log(media)

    if (media < 5) {
        alert("reprovado")
    } else if (media >= 5 && media < 7) {
        alert("recuperaçao")
    } else if (media >= 7) {
        alert("aprovado")
    }
}
const buttonExercicio9 = document.getElementById("exercicio9")
buttonExercicio9.addEventListener('click', () => { exercicio9() })


