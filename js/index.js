function somatorioDivisiveis3e5(numero) {
    let soma = 0;

    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }

    return soma;
  }

  function calcularSomatorio() {
    const inputNumero = document.getElementById("numeroInput").value;
    const numero = parseInt(inputNumero);

    if (!isNaN(numero) && numero > 0) {
      const resultado = somatorioDivisiveis3e5(numero);
      document.getElementById("resultado").innerHTML = `<p>O somatório dos números menores que ${numero} divisíveis por 3 ou 5 é: ${resultado}</p>`;
    } else {
      document.getElementById("resultado").innerHTML = "<p>Por favor, digite um número inteiro positivo válido.</p>";
    }
  }