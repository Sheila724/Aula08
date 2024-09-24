const math = require('mathjs'); // Importando a biblioteca mathjs

/**
 * Calcula a área de um retângulo.
 * @param {number} largura - A largura do retângulo.
 * @param {number} altura - A altura do retângulo.
 * @returns {number} - A área do retângulo.
 */
function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}

/**
 * Calcula a área de um círculo.
 * @param {number} raio - O raio do círculo.
 * @returns {number} - A área do círculo.
 */
function calcularAreaCirculo(raio) {
  return math.pi * math.pow(raio, 2);
}

/**
 * Calcula o perímetro de um retângulo.
 * @param {number} largura - A largura do retângulo.
 * @param {number} altura - A altura do retângulo.
 * @returns {number} - O perímetro do retângulo.
 */
function calcularPerimetroRetangulo(largura, altura) {
  return 2 * (largura + altura);
}

/**
 * Calcula o perímetro de um círculo.
 * @param {number} raio - O raio do círculo.
 * @returns {number} - O perímetro do círculo.
 */
function calcularPerimetroCirculo(raio) {
  return 2 * math.pi * raio;
}

// Variáveis de exemplo
let largura = 5;
let altura = 3;
let raio = 2;

// Cálculo das áreas e perímetros
let areaRetangulo = calcularAreaRetangulo(largura, altura);
let areaCirculo = calcularAreaCirculo(raio);
let perimetroRetangulo = calcularPerimetroRetangulo(largura, altura);
let perimetroCirculo = calcularPerimetroCirculo(raio);

// Exibindo os resultados
console.log("Área do retângulo:", areaRetangulo);
console.log("Área do círculo:", areaCirculo);
console.log("Perímetro do retângulo:", perimetroRetangulo);
console.log("Perímetro do círculo:", perimetroCirculo);
