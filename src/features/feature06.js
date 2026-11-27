// Funcionalidade 06: Calculadora de média
// Objetivo: Calcular média aritmética de uma lista de notas/valores.
// Exemplo de entrada: { valores: [7, 8, 9] }

const implemented = true;

function execute(input) {
  const { valores } = input || {};
  if (!Array.isArray(valores) || valores.length === 0 || !valores.every(Number.isFinite)) {
    throw new Error('Informe um array não vazio de números finitos.');
  }
  const soma = valores.reduce((acc, n) => acc + n, 0);
  return { media: soma / valores.length };
}

module.exports = {
  id: 6,
  name: 'Calculadora de média',
  description: 'Calcula média aritmética de uma lista de notas/valores.',
  implemented,
  execute
};
