const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escolha a forma geométrica (retângulo, círculo, triângulo, esfera): ', function(forma) {
  switch (forma.toLowerCase()) {
    case 'retângulo':
      rl.question('Digite a largura: ', function(largura) {
        rl.question('Digite a altura: ', function(altura) {
          let retangulo = new Retangulo(parseFloat(largura), parseFloat(altura));
          console.log("Área do retângulo:", retangulo.calcularArea());
          console.log("Perímetro do retângulo:", retangulo.calcularPerimetro());
          rl.close();
        });
      });
      break;
    case 'círculo':
      rl.question('Digite o raio: ', function(raio) {
        let circulo = new Circulo(parseFloat(raio));
        console.log("Área do círculo:", circulo.calcularArea());
        console.log("Perímetro do círculo:", circulo.calcularPerimetro());
        rl.close();
      });
      break;
    case 'triângulo':
      rl.question('Digite a base: ', function(base) {
        rl.question('Digite a altura: ', function(altura) {
          let triangulo = new Triangulo(parseFloat(base), parseFloat(altura));
          console.log("Área do triângulo:", triangulo.calcularArea());
          rl.close();
        });
      });
      break;
    case 'esfera':
      rl.question('Digite o raio: ', function(raio) {
        let esfera = new Esfera(parseFloat(raio));
        console.log("Volume da esfera:", esfera.calcularVolume());
        console.log("Área da superfície da esfera:", esfera.calcularAreaSuperficie());
        rl.close();
      });
      break;
    default:
      console.log('Forma geométrica não reconhecida.');
      rl.close();
  }
});
