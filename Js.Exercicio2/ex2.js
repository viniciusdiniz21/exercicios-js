let nmr1 = prompt("Digite o primeiro numero");
let nmr2 = prompt("Digite o segundo numero");
let nmr3 = prompt("Digite o terceiro numero");

let maiorValor = nmr1;

if(nmr2 > maiorValor){
    nmr2 = maiorValor
} else if(nmr3 > maiorValor){
    nmr3 = maiorValor
}

alert(`O maior valor é ${maiorValor}`)