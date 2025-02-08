//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  const inputNome = document.getElementById("amigo");
  const nome = inputNome.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }
}
