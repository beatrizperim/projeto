// 1. Capturando os títulos dos cards pelos IDs e armazenando em um objeto:
const titulosDosCards = {
  mussarela: document.getElementById("titulo-mussarela"),
  calabresa: document.getElementById("titulo-calabresa"),
  marguerita: document.getElementById("titulo-marguerita"),
  frango: document.getElementById("titulo-frango"),
};

// Verificando se TODOS os elementos foram encontrados:
const todosTitulosEncontrados = Object.values(titulosDosCards).every(
  (titulo) => titulo !== null
);

// 2. Alterando os títulos com innerHTML (executa APENAS SE os elementos forem encontrados):
if (todosTitulosEncontrados) {
  titulosDosCards.mussarela.innerHTML = "<b>Super Mussarela</b>";
  titulosDosCards.calabresa.innerHTML =
    "Calabresa <span>com Catupiry Especial</span>";
  titulosDosCards.marguerita.innerHTML = "Marguerita Clássica";
  titulosDosCards.frango.innerHTML = "Frango & Catupiry";
} else {
  console.error(
    "Um ou mais títulos NÃO foram encontrados. Verifique os IDs no HTML."
  );
}

// 3. Criando o array de objetos para os sabores:
const flavors = [
  {
    id: 1,
    title: "Mussarela",
    price: 60.0,
    description: "Mussarela derretida com molho de tomate e orégano.",
    image: "assets/images/mussarela.jpg",
  },
  {
    id: 2,
    title: "Calabresa com Catupiry",
    price: 65.0,
    description: "Calabresa defumada com cebola.",
    image: "assets/images/calabresa.jpg",
  },
  {
    id: 3,
    title: "Marguerita",
    price: 70.0,
    description:
      "Queijo mussarela, manjericão fresco e molho de tomate especial.",
    image: "assets/images/marguerita.jpg",
  },
  {
    id: 4,
    title: "Frango com Catupiry",
    price: 75.0,
    description: "Frango desfiado com catupiry cremoso e azeitonas verdes.",
    image: "assets/images/frango.jpg",
  },
];

// 4. Criando a função createCards():
function createCards() {
  flavors.forEach((flavor) => {
    const titleElement = document.getElementById(
      `titulo-${flavor.title.toLowerCase().replace(/ /g, "-")}`
    );
    const descriptionElement = document.getElementById(
      `descricao-${flavor.title.toLowerCase().replace(/ /g, "-")}`
    );
    const priceElement = document.getElementById(
      `preco-${flavor.title.toLowerCase().replace(/ /g, "-")}`
    );
    const imageElement = document.querySelector(
      `.flavor-box:nth-child(${flavor.id}) img`
    );

    if (titleElement) {
      titleElement.textContent = flavor.title; // Define o texto do título
    }

    if (descriptionElement) {
      descriptionElement.textContent = flavor.description; // Define o texto da descrição
    }

    if (priceElement) {
      priceElement.textContent = `R$ ${flavor.price.toFixed(2)}`; // Define o texto do preço formatado
    }

    if (imageElement) {
      imageElement.src = flavor.image; // Define o caminho da imagem
      imageElement.alt = flavor.title; // Define o texto alternativo da imagem
    }
  });
}

// 5. Chamando as funções:
createCards(); // Chama a função createCards() para preencher os dados dos cards

// *** CÓDIGO PARA OS BOTÕES (mantido) ***
const addButtons = document.querySelectorAll(".flavor-box button");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const price = button.parentNode.dataset.preco;
    alert(`Pizza added to cart! Price: R$${price}`);
  });
});
