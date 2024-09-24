class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return(this.base * this.altura) / 2;
    }

    // O perímetro do triângulo requer os três lados, então isso é apenas um exemplo simplificado
    calcularPerimetro(lado1, lado2, lado3) {
        return lado1 + lado2 + lado3;
    }
}

class Esfera {
    constructor(raio) {
        this.raio = raio;
    }

    calcularVolume() {
        return(4/3) * Math.pi * Math.pow(this.raio, 3);
    }

    calcularAreaSuperficie(){
        return 4 * Math.pi * Math.pow(this.raio, 2);
    }
}

// Uso
let triangulo = new Triangulo(5,3);
let esfera = new Esfera(2);

// Cálculo das áreas e volumes
let areaTriangulo = triangulo.calcularArea();
let volumeEsfera = esfera.calcularVolume();
let calcularAreaSuperficieEsfera = esfera.calcularAreaSuperficie();

// Exibir resultados
console.log("Área do triângulo: ", areaTriangulo);
console.log("Volume da esfera: ", volumeEsfera);
console.log("Área da superfície da esfera: ", calcularAreaSuperficieEsfera);