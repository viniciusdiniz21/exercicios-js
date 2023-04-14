let genero;
let altura;

function Menu(){
    genero = prompt("Digite M para Masculino ou F para Feminino")
}
Menu()
let pesoIdeal;

switch (genero) {
    case 'F':
        altura = prompt("Digite sua altura")
        pesoIdeal = (72.7 * altura) - 58
        break;
    case 'M':
        altura = prompt("Digite sua altura")
        pesoIdeal = (62.1 * altura) - 44.7
        break;

    default:
        alert("Genero inválido")
        Menu()
        break;
}

alert(`Seu peso ideal é ${pesoIdeal}`)