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

## Onde encontrar cada entrega

- Casos de teste: `docs/casos-de-testes.md`
- Estratégia de testes: `docs/estrategia-dos-testes.md`
- Resultados dos testes: `docs/resultados-dos-testes.md`
- Bugs encontrados: `docs/bugs.md`
- Ambiguidades encontradas: `docs/ambiguidades.md`
- Uso de IA: `docs/uso-ia.md`
- Evidências: `evidencias/`
- Testes de API: `postman/`
- Automação Playwright: `tests/`

## Automação Playwright

A automação cobre 4 cenários da aplicação.

### Implementação realizada

Além do mínimo solicitado no desafio, a suíte atual possui **4 cenários automatizados em Playwright**, executados no navegador Chromium.
Automação em Playwright executada com **4 cenários automatizados e 4 aprovados**.

Os testes estão organizados nos arquivos:

- `tests/carrinho.spec.ts`
- `tests/finalizacao-compra.spec.ts`

### Cenários automatizados

1. **Aplicar o cupom BEMVINDO10 e recalcular o pedido**
   - valida a aplicação do cupom válido;
   - valida o recálculo do pedido após o desconto.

2. **Rejeitar um cupom inexistente sem aplicar desconto**
   - valida o comportamento da aplicação para um cupom inválido;
   - garante que nenhum desconto seja aplicado.

3. **Limitar a quantidade do produto a 5 unidades**
   - valida a regra de quantidade máxima permitida por produto no carrinho.

4. **Finalizar um pedido válido com cupom e frete grátis**
   - valida o fluxo de compra;
   - utiliza cupom de desconto;
   - valida a aplicação do frete grátis;
   - valida a finalização do pedido.

### Como baixar e preparar o projeto

Para executar a automação é necessário ter instalado:

- [Node.js]
- npm, instalado junto com o Node.js

#### 1. Clonar o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/joelrocha68/desafio-verzel.git
```

#### 2. Acessar a pasta do projeto

```bash
cd desafio-verzel
```

#### 3. Instalar as dependências

```bash
npm install
```

#### 4. Instalar o Chromium utilizado pelo Playwright

```bash
npx playwright install chromium
```

#### 5. Executar os testes automatizados

Na raiz do projeto, execute:

```bash
npx playwright test
```

#### 6. Visualizar o relatório HTML

Após a execução dos testes:

```bash
npx playwright show-report
```

O relatório HTML será aberto no navegador, permitindo visualizar os cenários executados e os resultados de cada teste.

## Resultado atual

- Execução manual e exploratória realizada no frontend.
- Testes da API executados no Postman.
- Durante a execução da API foram realizadas **74 asserções**, com **67 aprovadas** e **7 falhas**.
- As falhas foram analisadas e consolidadas em **3 defeitos únicos**:
  1. frete grátis não aplicado no subtotal exatamente R$ 200,00;
  2. API aceita mais de 5 unidades por produto;
  3. código de erro diferente da documentação para item sem `quantidade`.
