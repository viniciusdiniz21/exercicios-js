let nome;
let idade;

function Menu(){
    nome = prompt("Digite o nome do nadador")
    idade = prompt("Digite a idade do nadador")
}
Menu()
let categoria

switch (idade) {
    case idade >=5 && idade <=7:
        categoria = "Infantil A"
        break;
    case idade >=8 && idade <=10:
        categoria = "Infantil B"
        break;
    case idade >=11 && idade <=13:
        categoria = "Juvenil A"
        break;
    case idade >=14 && idade <=17:
        categoria = "Juvenil B"
        break;
    case idade > 17:
        categoria = "Adulto"
        break;

    default:
        alert("Idade inválida")
        Menu()
        break;
}

alert(`O nadador ${nome} se enquadra na categoria ${categoria}`)