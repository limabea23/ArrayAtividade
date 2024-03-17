//método8: reduce = Executa uma função em cada elemento do array, resultando em um único valor de retorno.

//exemplo 1
let números = [10, 11, 12, 13, 14, 15]; //declara a variável
let soma = números.reduce(function(acumulador, valorAtual) { //declara a variável de soma e armazena o resultado da operação de redução
    return(acumulador) + valorAtual; //os elementos do array são adicionados no acumulador
}, 0); //acumulador é inciado com o valor '0' antes de iniciar a operação de redução
console.log(soma); //exibe a mensagem (resultado)

//exemplo 2
let númerosNegativos = [-10, -11, -12, -13, -14, -15]; //declara a variável
let som = números.reduce(function(acumulador, valorAtual) { //declara a variável de soma e armazena o resultado da operação de redução
    return(acumulador) + valorAtual; //os elementos do array são adicionados no acumulador
}, 0); //acumulador é inciado com o valor '0' antes de iniciar a operação de redução
console.log(soma); //exibe a mensagem (resultado)