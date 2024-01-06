// Variáveis para armazenar os valores de glicemia e colesterol
let nivelGlicemia = 120;
let nivelColesterol = 180;

// Função para verificar o nível de glicemia
function verificarGlicemia() {
  if (nivelGlicemia < 100) {
    return "Nível de glicemia abaixo do normal.";
  } else if (nivelGlicemia >= 100 && nivelGlicemia <= 125) {
    return "Nível de glicemia pré-diabético.";
  } else {
    return "Nível de glicemia elevado. Consulte um médico.";
  }
}

// Função para verificar o nível de colesterol
function verificarColesterol() {
  if (nivelColesterol < 200) {
    return "Nível de colesterol dentro do normal.";
  } else if (nivelColesterol >= 200 && nivelColesterol <= 239) {
    return "Nível de colesterol elevado.";
  } else {
    return "Nível de colesterol muito elevado. Consulte um médico.";
  }
}

// Chamadas das funções para verificar os níveis
console.log(verificarGlicemia());
console.log(verificarColesterol());
