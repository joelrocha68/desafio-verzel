import type { Page as Pagina } from '@playwright/test';

function escaparExpressaoRegular(valor: string): string {
  return valor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export const seletores = {
  cartaoProduto: (pagina: Pagina, nomeProduto: string) =>
    pagina.getByRole('article', { name: nomeProduto }),

  botaoAdicionarProduto: (pagina: Pagina, nomeProduto: string) =>
    pagina
      .getByRole('article', { name: nomeProduto })
      .getByRole('button', { name: 'Adicionar ao carrinho' }),

  linkCarrinho: (pagina: Pagina) =>
    pagina.getByRole('link', { name: /Carrinho/ }),

  campoCupom: (pagina: Pagina) =>
    pagina.getByRole('textbox', { name: 'Cupom de desconto' }),

  botaoAplicarCupom: (pagina: Pagina) =>
    pagina.getByRole('button', { name: 'Aplicar cupom' }),

  botaoRemoverCupom: (pagina: Pagina) =>
    pagina.getByRole('button', { name: 'Remover cupom' }),

  mensagemCupomAplicado: (pagina: Pagina, cupom: string) =>
    pagina.getByText(`Cupom ${cupom} aplicado.`),

  mensagemCupomInvalido: (pagina: Pagina) =>
    pagina.getByText('Cupom inválido.'),

  mensagemCupomExpirado: (pagina: Pagina) =>
    pagina.getByText('Cupom expirado.'),

  botaoAumentarQuantidade: (pagina: Pagina) =>
    pagina.getByRole('button', { name: /Aumentar quantidade/ }),

  botaoDiminuirQuantidade: (pagina: Pagina) =>
    pagina.getByRole('button', { name: /Diminuir quantidade/ }),

  mensagemLimiteQuantidade: (pagina: Pagina) =>
    pagina.getByText('Limite de 5 unidades por produto.'),

  botaoEsvaziarCarrinho: (pagina: Pagina) =>
    pagina.getByRole('button', { name: 'Esvaziar carrinho' }),

  linkFinalizarCompra: (pagina: Pagina) =>
    pagina.getByRole('link', { name: 'Finalizar compra' }),

  campoNomeCliente: (pagina: Pagina) =>
    pagina.getByRole('textbox', { name: 'Nome completo' }),

  campoEmailCliente: (pagina: Pagina) =>
    pagina.getByRole('textbox', { name: 'E-mail' }),

  campoCepCliente: (pagina: Pagina) =>
    pagina.getByRole('textbox', { name: 'CEP' }),

  botaoConfirmarPedido: (pagina: Pagina) =>
    pagina.getByRole('button', { name: 'Confirmar pedido' }),

  mensagemPedidoConfirmado: (pagina: Pagina) =>
    pagina.getByText('Pedido confirmado', { exact: true }),

  tituloNumeroPedido: (pagina: Pagina) =>
    pagina.getByRole('heading', { name: /Pedido VZ-\d{6}/ }),

  subtotal: (pagina: Pagina, valor: string) =>
    pagina.getByText(
      new RegExp(`Subtotal\\s*R\\$\\s*${escaparExpressaoRegular(valor)}`)
    ),

  descontoSemCupom: (pagina: Pagina, valor: string) =>
    pagina.getByText(
      new RegExp(`Desconto\\s*R\\$\\s*${escaparExpressaoRegular(valor)}`)
    ),

  descontoComCupom: (
    pagina: Pagina,
    cupom: string,
    valor: string
  ) =>
    pagina.getByText(
      new RegExp(
        `Desconto\\s*\\(${escaparExpressaoRegular(cupom)}\\)\\s*-\\s*R\\$\\s*${escaparExpressaoRegular(valor)}`
      )
    ),

  valorFrete: (pagina: Pagina, valor: string) =>
    pagina.getByText(
      new RegExp(`Frete\\s*R\\$\\s*${escaparExpressaoRegular(valor)}`)
    ),

  freteGratis: (pagina: Pagina) =>
    pagina.getByText(/Frete\s*Grátis/),

  total: (pagina: Pagina, valor: string) =>
    pagina.getByText(
      new RegExp(`Total\\s*R\\$\\s*${escaparExpressaoRegular(valor)}`)
    ),

  valorFaltanteFreteGratis: (pagina: Pagina, valor: string) =>
    pagina.getByText(`Faltam R$ ${valor} para o frete grátis.`),
};
