const math = require('mathjs'); // Importando a biblioteca mathjs

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(){
        return this.largura * this. altura;
    }

    calcularPerimetro(){
        return 2 * (this.largura + this.altura);
    }
}

class Circulo {
    constructor(raio){
        this.raio = raio;
    }

    calcularArea() {
        return math.pi * math.pow (this.raio, 2);
    }

    calcularPerimetro(){
        return 2 * math.pi * this.raio;
    }
};

// Uso
let retangulo = new Retangulo (5, 3);
let circulo = new Circulo(2)

// Cálculo das áreas e perímetros
let areaRetangulo = retangulo.calcularArea();
let areaCirculo = circulo.calcularArea();
let perimetroRetangulo = retangulo.calcularPerimetro();
let perimetroCirculo = circulo.calcularPerimetro();

// Exibindo os resultados
console.log("Área do retângulo: ", areaRetangulo);
console.log("Área do cículo: ", areaCirculo);
console.log("Perímetro do retângulo: ", perimetroCirculo)
console.log("Perímetro do circulo: ", perimetroCirculo);
