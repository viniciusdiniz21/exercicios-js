let id;
let nota1;
let nota2;
let nota3;
let me;

function Menu(){
    id = prompt("Digite o id do estudante")
    nota1 = prompt("Digite a nota da primeira prova do estudante")
    nota2 = prompt("Digite a nota da segunda prova do estudante")
    nota3 = prompt("Digite a nota da terceira prova do estudante")
    me = prompt("Digite a média dos exercícios do estudante")
}
Menu()
let ma = (nota1 + (nota2*2) + (nota3*3) + me)/7
let conceito;
switch (ma) {
    case ma < 4:
        categoria = "E"
        break;
    case ma >=4 && ma <6:
        categoria = "D"
        break;
    case ma >=6 && ma <7.5:
        categoria = "C"
        break;
    case ma >=7.5 && ma <9:
        categoria = "B"
        break;
    case ma >= 9:
        categoria = "A"
        break;

    default:
        alert("Algo deu errado tente novamente")
        Menu()
        break;
}

alert(`O nadador ${nome} se enquadra na categoria ${categoria}`)