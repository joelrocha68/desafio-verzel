import {
  test as teste,
  expect as esperar,
} from '@playwright/test';

import {
  PRODUTOS,
  CUPONS,
  CLIENTE,
  RESULTADOS_ESPERADOS,
} from '../dados/dados-de-teste';

import { seletores } from '../suporte/seletores';

import {
  adicionarProdutoAoCarrinho,
  aplicarCupom,
  confirmarPedido,
  preencherDadosCliente,
  irParaFinalizacao,
  aumentarQuantidade,
  abrirCarrinho,
  abrirLoja,
} from '../suporte/acoes';

teste.describe('Finalização de compra - Verzel Store', () => {
  teste(
    'deve finalizar um pedido válido com cupom e frete grátis',
    async ({ page: pagina }) => {
      await abrirLoja(pagina);

      await adicionarProdutoAoCarrinho(
        pagina,
        PRODUTOS.mochila.nome
      );

      await abrirCarrinho(pagina);

      await aumentarQuantidade(pagina, 2);

      await aplicarCupom(
        pagina,
        CUPONS.valido
      );

      await esperar(
        seletores.subtotal(
          pagina,
          RESULTADOS_ESPERADOS
            .tresMochilasComCupom
            .subtotal
        )
      ).toBeVisible();

      await esperar(
        seletores.descontoComCupom(
          pagina,
          CUPONS.valido,
          RESULTADOS_ESPERADOS
            .tresMochilasComCupom
            .desconto
        )
      ).toBeVisible();

      await esperar(
        seletores.freteGratis(pagina)
      ).toBeVisible();

      await esperar(
        seletores.total(
          pagina,
          RESULTADOS_ESPERADOS
            .tresMochilasComCupom
            .total
        )
      ).toBeVisible();

      await irParaFinalizacao(pagina);

      await preencherDadosCliente(
        pagina,
        CLIENTE.valido
      );

      await confirmarPedido(pagina);

      await esperar(
        seletores.mensagemPedidoConfirmado(pagina)
      ).toBeVisible();

      await esperar(
        seletores.tituloNumeroPedido(pagina)
      ).toBeVisible();
    }
  );
});
