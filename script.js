const sortBtn = document.getElementById("sort-button");
const quantidadeNumeros = document.getElementById("quantidade-numeros");
const numeroMinimo = document.getElementById("numero-minimo");
const numeroMaximo = document.getElementById("numero-maximo");


const sortearNumeros = () => {
  const qtdNumeros = quantidadeNumeros.value;
  const min = numeroMinimo.value;
  const max = numeroMaximo.value;

  if (qtdNumeros > max - min + 1) {
    alert("A quantidade de números sorteados não pode ser maior do que a diferença entre o número máximo e mínimo.");
    return;
  }

  const numerosSorteados = [];
  for (let i = 0; i <= qtdNumeros; i++) {
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numerosSorteados.includes(numeroSorteado)) {
      numerosSorteados.push(numeroSorteado);
    }
  }

}