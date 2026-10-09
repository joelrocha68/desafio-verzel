export const PRODUTOS = {
  mochila: {
    id: 'P005',
    nome: 'Mochila Urbana 20L',
    preco: 100,
  },

  bone: {
    id: 'P004',
    nome: 'Boné Aba Curva',
    preco: 49.9,
  },
} as const;

export const CUPONS = {
  valido: 'BEMVINDO10',
  invalido: 'CUPOMNAOEXISTE',
  expirado: 'VERAO2026',
} as const;

export const CLIENTE = {
  valido: {
    nome: 'Maria Silva',
    email: 'maria@teste.com',
    cep: '01310-000',
  },
} as const;

export const RESULTADOS_ESPERADOS = {
  umaMochilaComCupom: {
    subtotal: '100,00',
    desconto: '10,00',
    frete: '19,90',
    total: '109,90',
    faltanteFreteGratis: '100,00',
  },

  umaMochilaSemCupom: {
    subtotal: '100,00',
    desconto: '0,00',
    frete: '19,90',
    total: '119,90',
  },

  tresMochilasComCupom: {
    subtotal: '300,00',
    desconto: '30,00',
    total: '270,00',
  },

  limiteQuantidade: 5,
} as const;
