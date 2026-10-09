import {
  test as teste,
  expect as esperar,
} from '@playwright/test';

import {
  PRODUTOS,
  CUPONS,
  RESULTADOS_ESPERADOS,
} from '../dados/dados-de-teste';

import { seletores } from '../suporte/seletores';

import {
  adicionarProdutoAoCarrinho,
  aplicarCupom,
  aumentarQuantidade,
  abrirCarrinho,
  abrirLoja,
} from '../suporte/acoes';

teste.describe('Carrinho - Verzel Store', () => {
  teste.beforeEach(async ({ page: pagina }) => {
    await abrirLoja(pagina);
  });

  teste(
    'deve aplicar o cupom BEMVINDO10 e recalcular o pedido',
    async ({ page: pagina }) => {
      await adicionarProdutoAoCarrinho(
        pagina,
        PRODUTOS.mochila.nome
      );

      await abrirCarrinho(pagina);

      await aplicarCupom(
        pagina,
        CUPONS.valido
      );

      await esperar(
        seletores.mensagemCupomAplicado(
          pagina,
          CUPONS.valido
        )
      ).toBeVisible();

      await esperar(
        seletores.subtotal(
          pagina,
          RESULTADOS_ESPERADOS.umaMochilaComCupom.subtotal
        )
      ).toBeVisible();

      await esperar(
        seletores.descontoComCupom(
          pagina,
          CUPONS.valido,
          RESULTADOS_ESPERADOS.umaMochilaComCupom.desconto
        )
      ).toBeVisible();

      await esperar(
        seletores.valorFrete(
          pagina,
          RESULTADOS_ESPERADOS.umaMochilaComCupom.frete
        )
      ).toBeVisible();

      await esperar(
        seletores.total(
          pagina,
          RESULTADOS_ESPERADOS.umaMochilaComCupom.total
        )
      ).toBeVisible();

      await esperar(
        seletores.valorFaltanteFreteGratis(
          pagina,
          RESULTADOS_ESPERADOS
            .umaMochilaComCupom
            .faltanteFreteGratis
        )
      ).toBeVisible();
    }
  );

  teste(
    'deve rejeitar um cupom inexistente sem aplicar desconto',
    async ({ page: pagina }) => {
      await adicionarProdutoAoCarrinho(
        pagina,
        PRODUTOS.mochila.nome
      );

      await abrirCarrinho(pagina);

      await aplicarCupom(
        pagina,
        CUPONS.invalido
      );

      await esperar(
        seletores.mensagemCupomInvalido(pagina)
      ).toBeVisible();

      await esperar(
        seletores.descontoSemCupom(
          pagina,
          RESULTADOS_ESPERADOS
            .umaMochilaSemCupom
            .desconto
        )
      ).toBeVisible();

      await esperar(
        seletores.total(
          pagina,
          RESULTADOS_ESPERADOS
            .umaMochilaSemCupom
            .total
        )
      ).toBeVisible();
    }
  );

  teste(
    'deve limitar a quantidade do produto a 5 unidades',
    async ({ page: pagina }) => {
      await adicionarProdutoAoCarrinho(
        pagina,
        PRODUTOS.mochila.nome
      );

      await abrirCarrinho(pagina);

      await aumentarQuantidade(
        pagina,
        RESULTADOS_ESPERADOS.limiteQuantidade - 1
      );

      await esperar(
        seletores.mensagemLimiteQuantidade(pagina)
      ).toBeVisible();

      await esperar(
        seletores.botaoAumentarQuantidade(pagina)
      ).toBeDisabled();
    }
  );
});
