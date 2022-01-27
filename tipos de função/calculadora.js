function calculadora() {
    const operacao = prompt('Escolha uma operação :\n 1- Soma (+)\n 2- Subtração (-)\n 3-multiplicação (*)\n 4-Divisão real (/)\n 5- divisão inteira (%)\n  6- potencicação (**) ');

    if (!operacao || operacao >=7) {
        alert('Error, dIgite uma opção valida ');
        calculadora();
    } else {

        let n1 =Number( prompt('Digite o primeiro número '));
        let n2 =Number(prompt('Digite o segundo número ')) ;
        let resultado;
    
        if (!n1 || !n2) {
            alert('Error, Parametros invalidos ');;
            calculadora();
        } else {
            function soma() {
                resultado = n1+n2;
                alert(`O resuldaro da soma de ${n1} + ${n2} é : `+resultado);
                novaOperacao();
            }
        
        
            function subtracao() {
                resultado = n1-n2;
                alert(`O resuldaro da subtação de ${n1} + ${n2} é : `+resultado);
                novaOperacao();
            }
        
            function multiplicacao() {
                resultado = n1*n2;
                alert(`O resuldaro da multiplicação de ${n1} + ${n2} é : `+resultado);
                novaOperacao();
            }
            function  divisaoReal() {
                resultado = n1/n2;
                alert(`O resuldaro da divisão real de ${n1} + ${n2} é : `+resultado);
                novaOperacao();
            }
        
            function  divisaoInteira() {
                resultado = n1%n2;
                alert(`O resuldaro da divisão inteira de ${n1} + ${n2} é : `+resultado);
                novaOperacao();
            }
        
            function  potenciacao() {
                resultado = n1**n2;
                alert(`O resuldaro da potenciação de ${n1} + ${n2} é : `+resultado);
                novaOperacao();
            }
        
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação ?\n 1- Sim\n /- Não');
        
                if (opcao == 1) {
                    calculadora()
                } else if (opecao == 2) {
                    alert('Obrigado por utilizar nossa calculadora, até mais ');
                } else {
                    alert('error , favaor digitar uma opeção valida');
                    novaOperacao();
                }
            }
        }
        
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        }else if (operacao == 6) {
            potenciacao();
        }
    
    }

    
}

calculadora();