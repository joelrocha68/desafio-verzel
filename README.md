# Verzel Store — Desafio

Desafio técnico de QA sobre pra Cupom de desconto e frete grátis.

## Objetivo

Validar a funcionalidade por meio de:
- cenários de teste levantados a partir da documentação;
- execução manual e exploratória;
- testes de API;
- registro de bugs;
- evidências;
- automação em Playwright (mínimo de 3 cenários);
- documentação da estratégia e resultados.

## Aplicação

- Loja: https://verzel-store.qa-test-verzel-store.workers.dev/
- Documentação: https://verzel-store.qa-test-verzel-store.workers.dev/documentacao
- API base: https://verzel-store.qa-test-verzel-store.workers.dev/api

## Como executar os testes de API

1. Importe `postman/Verzel Loja- Desafio QA.postman_collection.json` no Postman.
2. Execute as pastas da collection:
   - `01 - Produtos`
   - `02 - Carrinho - Regras de negócio da loja`
   - `03 - Carrinho - Outras Validações`
   - `04 - Pedidos`
   - `05 - Erros em geral`

## Escopo funcional

Incluído:
- cupom `BEMVINDO10`;
- cupom expirado `VERAO2026`;
- cálculo de subtotal, desconto, frete e total;
- frete grátis a partir de R$ 200,00;
- limite de 5 unidades por produto;
- dados do cliente;
- endpoints documentados.

## Automação Playwright

A automação cobre 3 cenários da aplicação.

## Resultado atual

- Execução manual e exploratória realizada no frontend.
- Testes da API executados no Postman.
- Durante a execução da API foram realizadas **74 asserções**, com **67 aprovadas** e **7 falhas**.
- As falhas foram analisadas e consolidadas em **3 defeitos únicos**:
  1. frete grátis não aplicado no subtotal exatamente R$ 200,00;
  2. API aceita mais de 5 unidades por produto;
  3. código de erro diferente da documentação para item sem `quantidade`.
