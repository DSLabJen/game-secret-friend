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

amigos.push(nome);
  atualizarListaAmigos();
  inputNome.value = "";
  function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
      lista.innerHTML += `<li class="name-item">${index + 1}. ${amigo}</li>`;
    });
  }

  function sortearAmigo() {
    if (amigos.length === 0) {
      alert("Nenhum amigo disponível para sortear.");
      return;
    }
  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li class="result-item">Amigo Secreto Sorteado: <strong>${amigoSorteado}</strong></li>`;
  }
  

