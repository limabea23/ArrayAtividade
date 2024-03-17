//splice = Adiciona, remove ou substitui elementos de um array em uma posição especificada.

//exemplo 1 (adicionar)
let números = [5, 6, 7, 8];
números.splice(2, 0, 5);
console.log(números);

//exemplo 2 (remover)
let letras = ["a", "b", "c", "d"];
letras.splice(1,1);
console.log(letras);

//exemplo 3 (substituir)
let gênerosMusicais = ["pop", "rap", "samba", "funk"];
gênerosMusicais.splice(3, 2,"clássica");
console.log(gênerosMusicais);