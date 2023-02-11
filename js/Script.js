var salario = document.getElementById("input-1").value

var dependentes = document.getElementById("input-2").value

var vale = document.getElementById("checkbox").value

var calc = document.getElementById("botao").value

var irrf =0;




switch(true) {
    case (salario <= 1903.98):
        var calc = (salario - 0)
        break;
    case (salario >= 1903,99 && salario <= 2826.65):
        var calc = (salario / 100) * 7.5;
        break;
    case (salario >= 2826.66 && salario <= 3751.06 ):
        var calc = (salario / 100) * 15;
        break;
    case (salario >= 3751.07 && salario <= 4664.68 ):
            var calc = (salario / 100) * 22.5;
        break;
    default:
            var calc = (salario / 100) * 27.5;
        break;

}
/*IRRF até 1.903,98 isento
 1.903,99 a 2.826,65 é 7,5%
 2.826,66 a 3.751,06 é 15%
 3.751,07 a 4.664,68 é 22,5%
 acima de 4.664,69 é 27,5% */

var inss =0;

switch(true) {
    case (salario <= 1302):
        var inss = (salario / 100) * 7.5;
        break;
    case (salario >= 1302.01 && salario <= 2571.29):
        var inss = (salario / 100) * 9;
        break;
    case (salario > 2571.30 && salario < 3856.94 ):
        var inss = (salario / 100) * 12;
        break;
    case (salario > 3856.95 && salario <= 7507.49):
        var inss = (salario / 100) * 14;
        break;
    default:
        var inss = (7507.49 / 100) * 14;
        break;
}

/*
salario < 1.302,00  -  7,5%
salario > 1.302,01 < 2.571,29 - 9%
salario > 2.571,30 < 3.856,94 - 12%
salario > 3.856,95 < 7.507,49 - 14%
salario < 7.507,49 - 14%      com o valor do maximo
*/

console.



