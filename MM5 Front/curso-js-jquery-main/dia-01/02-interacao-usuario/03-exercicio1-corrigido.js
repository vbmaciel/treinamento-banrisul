// 1. Captura o nome do usuário usando prompt
const nomeUsuario = prompt("Por favor, digite seu nome:");

// 2. Seleciona o elemento na página
const paragrafo = document.getElementById("mensagem-boas-vindas");

// 3. Define o novo conteúdo, utilizando o nome capturado
if (nomeUsuario) {
    paragrafo.textContent = `Seja bem-vindo(a), ${nomeUsuario}!`;
} else {
    paragrafo.textContent = "Seja bem-vindo(a), Visitante!";
}