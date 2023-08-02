// Listas para guardar os nomes, idades e cores favoritas de dez pessoas
const nomes = ["Apolo", "Dimitri", "Saulo", "Joab", "Joaquim", "Lúcia", "Mariana", "José", "Laura", "Rafael"];
const idades = [15, 22, 22, 55, 59, 27, 19, 44, 31, 74];
const coresFavoritas = ["Azul", "Verde", "Amarelo", "Vermelho", "Roxo", "Laranja", "Rosa", "Preto", "Branco", "Marrom"];

// Imprimir as listas iniciais
console.log("Listas iniciais:");
console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores favoritas:", coresFavoritas);

// Fazer algumas modificações nas cores e idades
coresFavoritas[0] = "Cinza"; // Alterando a primeira cor favorita
idades[2] = 23; // Alterando a idade da terceira pessoa

// Imprimir as listas após as modificações
console.log("\nListas após as modificações:");
console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores favoritas:", coresFavoritas);
