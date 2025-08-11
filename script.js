class Sorteador {
  constructor(qtdNumeros, numeroMinimo, numeroMaximo, botaoIniciar) {
    this.qtdNumeros = document.getElementById("qtd-numeros");
    this.numeroMinimo = document.getElementById("numero-minimo");
    this.numeroMaximo = document.getElementById("numero-maximo");
    this.botaoIniciar = document.getElementById("sort-button");
  }

  inicializar() {
    this.botaoIniciar.addEventListener("click", sortear);
  }

  sortear() {
    let qtdNumeros = this.qtdNumeros.value;
    let numeroMinimo = this.numeroMinimo.value;
    let numeroMaximo = this.numeroMaximo.value;

    let numerosSorteados = [];

    for (let i = 0; i <= qtdNumeros; i++) {
      let numeroSorteado =
        Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) +
        numeroMinimo;
      numerosSorteados.push(numeroSorteado);
    }

    console.log(numerosSorteados);

    if (!numeroMinimo || !numeroMaximo) {
      alert("Por favor, insira valores válidos.");
      return;
    }

    if (qtdNumeros > numeroMaximo - numeroMinimo + 1) {
      alert(
        "A quantidade de números sorteados não pode exceder a diferença entre o número máximo e o número mínimo."
      );
      return;
    }

    if (qtdNumeros <= 0) {
      alert("Por favor, insira uma quantidade válida de números.");
      return;
    }

    if (numeroMinimo > numeroMaximo) {
      alert("O número mínimo não pode ser maior que o número máximo.");
      return;
    }
  }
}
