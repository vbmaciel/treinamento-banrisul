// 1. Inicialização e Adição Dinâmica (push)
const listaDeTarefas = [
    "Comprar ingredientes do jantar", 
    "Responder e-mails pendentes"
];

console.log("Lista Inicial:", listaDeTarefas);

// Adicionando a terceira tarefa ao final
listaDeTarefas.push("Pagar a conta de luz");

console.log("Lista após Push:", listaDeTarefas);

// Remoção da última tarefa
const tarefaConcluida = listaDeTarefas.pop();

console.log(`Tarefa Concluída: ${tarefaConcluida}`);
console.log("Lista após Pop:", listaDeTarefas);

// Acesso à primeira tarefa (índice 0)
console.log("Primeira Tarefa (índice 0):", listaDeTarefas[0]);

// Imprimindo o tamanho final
console.log("Tamanho final da lista:", listaDeTarefas.length);