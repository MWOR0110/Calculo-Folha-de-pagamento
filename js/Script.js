/*https://calculosonline.netlify.app/pages/javascript*/

var salario =8000// Number(document.getElementById('salario').value)
var dependentes = Number(document.getElementById("input-dependentes").value)
var vale = Boolean(document.getElementById("checkbox").value)

var botao = document.getElementById('botao1')
botao.addEventListener('click',calcular)

console.log(salario)
function calcular(){

    
    var irrf, inss, vt, resultadofinal

    switch(true) {
        case salario <= 1903.98:
            irrf  = 0
            break;
        case salario <= 2826.65:
            irrf  = salario  * 0.075;
            break;
        case salario <= 3751.06 :
            irrf  = salario * 0.15;
            break;
        case salario <= 4664.68 :
            irrf  = salario * 0.225;
            break;
        default:
            irrf  = salario * 0.275;
            break;

    }
    
    /*IRRF até 1.903,98 isento
    1.903,99 a 2.826,65 é 7,5%
    2.826,66 a 3.751,06 é 15%
    3.751,07 a 4.664,68 é 22,5%
    acima de 4.664,69 é 27,5% */



    switch(true) {
        case salario <= 1302:
            inss = salario * 0.075;
            break;
        case salario > salario <= 2571.29:
            inss = salario * 0.9;
            break;
        case salario = salario < 3856.94 :
            inss = salario * 0.12;
            break;
        case salario = salario <= 7507.49:
            inss = salario * 0.14;
            break;
        default:
            inss = 7507.49 * 0.14;
            break;
    }
    

    if(vale){
        vt = salario* 0.6;
    }else{
        vt = 0;
    }
   

    
    resultadofinal = salario

    document.getElementById('salbruto').innerText = resultadofinal
    console.log(salario)
    /*
    salario < 1.302,00  -  7,5%
    salario > 1.302,01 < 2.571,29 - 9%
    salario > 2.571,30 < 3.856,94 - 12%
    salario > 3.856,95 < 7.507,49 - 14%
    salario < 7.507,49 - 14%      com o valor do maximo
    */

    //var p = window.document.getElementById("resultado")

   // document.write(p.innerText("RESULTADO: " + resultadofinal))

   


    
}



