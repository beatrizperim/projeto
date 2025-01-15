// home.js

// 1. Capturando os títulos dos cards pelos IDs e armazenando em um objeto:
const titulosDosCards = {
  // Nome da variável mais descritivo
  mussarela: document.getElementById("titulo-mussarela"),
  calabresa: document.getElementById("titulo-calabresa"),
  marguerita: document.getElementById("titulo-marguerita"),
  frango: document.getElementById("titulo-frango"),
};

// Verificando se TODOS os elementos foram encontrados (importante para evitar erros):
const todosTitulosEncontrados = Object.values(titulosDosCards).every(
  (titulo) => titulo !== null
);

if (todosTitulosEncontrados) {
  // 2. Alterando os títulos com innerHTML (conforme solicitado pela tarefa):
  titulosDosCards.mussarela.innerHTML = "<b>Super Mussarela</b>";
  titulosDosCards.calabresa.innerHTML =
    "Calabresa <span>com Catupiry Especial</span>";
  titulosDosCards.marguerita.innerHTML = "Marguerita Clássica";
  titulosDosCards.frango.innerHTML = "Frango & Catupiry";

  // Exemplo de iteração (loop) para alterar todos os títulos de uma vez (opcional, mas demonstra uma forma mais dinâmica):
  const novosTitulos = {
    mussarela: "Mussarela Deliciosa",
    calabresa: "Calabresa Defumada",
    marguerita: "Marguerita Tradicional",
    frango: "Frango Cremoso",
  };

  for (const chave in novosTitulos) {
    if (
      novosTitulos.hasOwnProperty(chave) &&
      titulosDosCards.hasOwnProperty(chave)
    ) {
      titulosDosCards[chave].innerHTML = novosTitulos[chave];
    }
  }
} else {
  console.error(
    "Um ou mais títulos NÃO foram encontrados. Verifique os IDs no HTML."
  );
  // Aqui você pode adicionar um tratamento alternativo, como exibir uma mensagem na tela para o usuário.
}
