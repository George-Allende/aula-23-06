/*
let A = Number (prompt("Digite um valor parar entrada"))
let B = Number (prompt ("Digite outro valor para somar"))
X= A+B
if(X>=10){
    X+=5
alert("O resultado da soma é igual a:"+ X)
}
else{
  X-=7
    alert("O resultado da soma é igual a:"+ X)
}
*/







/*
let sal = Number (prompt("Digite o valor do salario atual para que possa ser reajustado"))
if(SA<=500){
    sal*=1.15
    alert(sal)
}
else if(sal <=1000){
    sal*=1.1
    alert(sal)
}
else{
    sal *= 1.05
    alert(sal)
}
alert(sal)*/



/*
let sal= Number(prompt("Digite o valor do salário"))

if(sal <= 500){
    novosalario = calculareajustedesalario(sal, 0.15)
}
else if(sal<=1000){
    novosalario = calculareajustedesalario(sal, 0.1)
}
else{
    novosalario = calculareajustedesalario(sal, 0.15)
}
function calculareajustedesalario(salario, porcentagem){
    var per = salario *porcentagem
    return sal += per
}
alert(novosalario)
    console.log(sal)
*/


let largura = Number(prompt("Digite a altura"))
let altura = Number(prompt("digite a largura"))

alert(cauculararea(largura, altura))

function cauculararea(l, a){
    if(l==a){
          return "Você colocou um quadrado e não um retangulo"
      
    } 
    else if(largura<=0){
        alert("Você nao digitou um numero ")
    }
    else if(altura<=0){
        alert("Você não digitou um numero")
    }
    else{
    "Você escreveu um numero invalido "
      return l*a
    }

 }


   
