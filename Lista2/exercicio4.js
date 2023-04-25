function VerificarPesoIdeal() {
  let genero;
  let altura;

  genero = document.getElementById("genero").value;
  let pesoIdeal;

  switch (genero.toUpperCase()) {
    case "F":
      altura = Number(document.getElementById("altura").value);
      pesoIdeal = 72.7 * altura - 58;
      break;
    case "M":
      altura = Number(document.getElementById("altura").value);
      pesoIdeal = 62.1 * altura - 44.7;
      break;

    default:
      document.getElementById("resultado").innerHTML = "Genero inválido";
      Menu();
      break;
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `Seu peso ideal é ${pesoIdeal} kg's`;
}
