import type { Page as Pagina } from '@playwright/test';

import { seletores } from './seletores';

type DadosCliente = {
  nome: string;
  email: string;
  cep: string;
};

export async function abrirLoja(pagina: Pagina): Promise<void> {
  await pagina.goto('/');
}

export async function adicionarProdutoAoCarrinho(
  pagina: Pagina,
  nomeProduto: string
): Promise<void> {
  await seletores.botaoAdicionarProduto(
    pagina,
    nomeProduto
  ).click();
}

export async function abrirCarrinho(
  pagina: Pagina
): Promise<void> {
  await seletores.linkCarrinho(pagina).click();
}

export async function aplicarCupom(
  pagina: Pagina,
  cupom: string
): Promise<void> {
  await seletores.campoCupom(pagina).fill(cupom);
  await seletores.botaoAplicarCupom(pagina).click();
}

export async function removerCupom(
  pagina: Pagina
): Promise<void> {
  await seletores.botaoRemoverCupom(pagina).click();
}

export async function aumentarQuantidade(
  pagina: Pagina,
  quantidadeDeCliques = 1
): Promise<void> {
  const botao = seletores.botaoAumentarQuantidade(pagina);

  for (
    let indice = 0;
    indice < quantidadeDeCliques;
    indice += 1
  ) {
    await botao.click();
  }
}

export async function diminuirQuantidade(
  pagina: Pagina,
  quantidadeDeCliques = 1
): Promise<void> {
  const botao = seletores.botaoDiminuirQuantidade(pagina);

  for (
    let indice = 0;
    indice < quantidadeDeCliques;
    indice += 1
  ) {
    await botao.click();
  }
}

export async function irParaFinalizacao(
  pagina: Pagina
): Promise<void> {
  await seletores.linkFinalizarCompra(pagina).click();
}

export async function preencherDadosCliente(
  pagina: Pagina,
  cliente: DadosCliente
): Promise<void> {
  await seletores.campoNomeCliente(pagina).fill(cliente.nome);
  await seletores.campoEmailCliente(pagina).fill(cliente.email);
  await seletores.campoCepCliente(pagina).fill(cliente.cep);
}

export async function confirmarPedido(
  pagina: Pagina
): Promise<void> {
  await seletores.botaoConfirmarPedido(pagina).click();
}

export async function esvaziarCarrinho(
  pagina: Pagina
): Promise<void> {
  await seletores.botaoEsvaziarCarrinho(pagina).click();
}
