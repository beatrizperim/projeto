// Métodos de captura (demonstração):
const tituloMussarelaPorId = document.getElementById("titulo-mussarela");
const elementosFlavorBox = document.getElementsByClassName("flavor-box");
const primeiroFlavorBox = document.querySelector(".flavor-box");

console.log("Título Mussarela por ID:", tituloMussarelaPorId);
console.log("Elementos com classe flavor-box:", elementosFlavorBox);
console.log("Primeiro elemento com classe flavor-box:", primeiroFlavorBox);

// Alterando o título com innerHTML (demonstração inicial):
if (tituloMussarelaPorId) {
  // Mantendo a verificação INDIVIDUAL do elemento
  tituloMussarelaPorId.innerHTML = "<b>Super Mussarela (Demo)</b>";
}

// Objetos para os sabores:
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

// Função createCards() usando os objetos (versão SIMPLIFICADA - sem verificação global):
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
      // Verificação INDIVIDUAL do elemento (IMPORTANTE!)
      titleElement.innerHTML = `<b>${flavor.title}</b>`; // Uso consistente de <b>
    }
    if (descriptionElement) {
      descriptionElement.textContent = flavor.description;
    }
    if (priceElement) {
      priceElement.textContent = `R$ ${flavor.price.toFixed(2)}`;
    }
    if (imageElement) {
      imageElement.src = flavor.image;
      imageElement.alt = flavor.title;
    }
  });
}

createCards();

// Código para os botões:
const addButtons = document.querySelectorAll(".flavor-box button");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const price = button.parentNode.dataset.preco;
    alert(`Pizza adicionada ao carrinho! Preço: R$${price}`);
  });
});
