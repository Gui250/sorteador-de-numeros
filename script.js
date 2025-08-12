const sortBtn = document.getElementById("sort-button");
const quantidadeNumeros = document.getElementById("quantidade-numeros");
const numeroMinimo = document.getElementById("numero-minimo");
const numeroMaximo = document.getElementById("numero-maximo");
const inputWrapper = document.getElementById("input-wrapper");
const sortContainer = document.getElementById("sort-container");

const sortearNumeros = () => {
  const qtdNumeros = parseInt(quantidadeNumeros.value);
  const min = parseInt(numeroMinimo.value);
  const max = parseInt(numeroMaximo.value);

  // Validações
  if (!qtdNumeros || !min || !max) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (min >= max) {
    alert("O número mínimo deve ser menor que o número máximo.");
    return;
  }

  if (qtdNumeros > max - min + 1) {
    alert(
      "A quantidade de números sorteados não pode ser maior do que a diferença entre o número máximo e mínimo."
    );
    return;
  }

  const numerosSorteados = [];

  // Gera números únicos
  for (let i = 0; i < qtdNumeros; i++) {
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!numerosSorteados.includes(numeroSorteado)) {
      numerosSorteados.push(numeroSorteado);
    } else {
      i--; // Decrementa para tentar novamente
    }
  }

  // Remove o input wrapper e substitui pelo container dos números sorteados
  const numeroSorteadoContainer = document.createElement("div");
  numeroSorteadoContainer.classList.add("numero-sorteado-container");

  const numeroSorteadoText = document.createElement("p");
  numeroSorteadoText.classList.add("sorteado-text");
  numeroSorteadoText.innerText = numerosSorteados.sort((a, b) => a - b).join(", ");

  // Debug: verificar se as classes foram aplicadas
  console.log("Classes do container:", numeroSorteadoContainer.classList);
  console.log("Classes do texto:", numeroSorteadoText.classList);
  console.log("Números sorteados:", numerosSorteados);

  numeroSorteadoContainer.appendChild(numeroSorteadoText);

  // Substitui o input-wrapper pelo numeroSorteadoContainer
  inputWrapper.parentNode.replaceChild(numeroSorteadoContainer, inputWrapper);
};

sortBtn.addEventListener("click", sortearNumeros);
