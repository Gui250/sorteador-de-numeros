const sortBtn = document.getElementById("sort-button");
const quantidadeNumeros = document.getElementById("quantidade-numeros");
const numeroMinimo = document.getElementById("numero-minimo");
const numeroMaximo = document.getElementById("numero-maximo");
const inputWrapper = document.getElementById("input-wrapper");
const sortContainer = document.getElementById("sort-container");
const btnNaoRepetir = document.querySelector(".toggle-input");
const toggleContainer = document.querySelector(".toggle-container");
const sortTextContainer = document.getElementById("sort-text-container");
let contador = 0;

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

  if (btnNaoRepetir.checked) {
    // Gera números únicos (sem repetição)
    for (let i = 0; i < qtdNumeros; i++) {
      let numeroSorteado;
      do {
        numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (numerosSorteados.includes(numeroSorteado));

      numerosSorteados.push(numeroSorteado);
    }
  } else {
    // Gera números duplicados
    for (let i = 0; i < qtdNumeros; i++) {
      const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      numerosSorteados.push(numeroSorteado);
    }
  }

  // Incrementa o contador após gerar os números
  contador++;

  // Remove o input wrapper e substitui pelo container dos números sorteados
  const textResultContainer = document.createElement("div");
  textResultContainer.classList.add("text-result-container");
  const titleSort = document.createElement("h2");
  titleSort.classList.add("title-sort");
  const paragraphSort = document.createElement("p");
  paragraphSort.classList.add("paragraph-sort");

  titleSort.innerText = "Números Sorteados:";
  paragraphSort.innerText = `${contador} º resultado`;

  textResultContainer.appendChild(titleSort);
  textResultContainer.appendChild(paragraphSort);

  sortTextContainer.parentNode.replaceChild(
    textResultContainer,
    sortTextContainer
  );

  const numeroSorteadoContainer = document.createElement("div");
  numeroSorteadoContainer.classList.add("numero-sorteado-container");

  const numeroSorteadoText = document.createElement("p");
  numeroSorteadoText.classList.add("sorteado-text");
  numeroSorteadoText.innerText = numerosSorteados
    .sort((a, b) => a - b)
    .join(", ");

  numeroSorteadoContainer.appendChild(numeroSorteadoText);

  toggleContainer.style.display = "none";

  // Substitui o input-wrapper pelo numeroSorteadoContainer
  inputWrapper.parentNode.replaceChild(numeroSorteadoContainer, inputWrapper);

  const tentarNovamenteBtn = document.createElement("button");
  tentarNovamenteBtn.classList.add("tentar-novamente-btn");
  tentarNovamenteBtn.innerText = "Tentar Novamente";

  const img = document.createElement("img");
  img.src = "./assets/Frame3.svg";
  img.alt = "Tentar Novamente";
  tentarNovamenteBtn.appendChild(img);

  sortBtn.parentNode.replaceChild(tentarNovamenteBtn, sortBtn);

  tentarNovamenteBtn.addEventListener("click", () => {
    numeroSorteadoContainer.parentNode.replaceChild(
      inputWrapper,
      numeroSorteadoContainer
    );
    quantidadeNumeros.value = "";
    numeroMinimo.value = "";
    numeroMaximo.value = "";
    toggleContainer.style.display = "block";

    tentarNovamenteBtn.parentNode.replaceChild(sortBtn, tentarNovamenteBtn);
    textResultContainer.parentNode.replaceChild(
      sortTextContainer,
      textResultContainer
    );
  });
};

sortBtn.addEventListener("click", sortearNumeros);
