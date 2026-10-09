# Casos de Teste

Status: `N/E` = não executado, `PASS` = passou, `FAIL` = falhou.

## Interface

| ID | CA | Cenário | Técnica | Prioridade | Status |
|---|---|---|---|---|---|
| UI-001 | CA06, CA07 | Exibir frete grátis para subtotal acima de R$ 200,00 | Partição válida | Alta | PASS |
| UI-002 | CA07 | Cobrar R$ 19,90 e exibir faltante abaixo de R$ 200,00 | Valor limite | Alta | PASS |
| UI-003 | CA10 | Permitir aumentar quantidade até 5 unidades | Valor limite | Alta | PASS |
| UI-004 | CA10 | Impedir aumento para 6 unidades | Valor limite | Alta | PASS |
| UI-005 | CA01, CA09, CA11 | Aplicar BEMVINDO10 e recalcular total | Regra de negócio | Alta | PASS |
| UI-006 | CA05 | Exibir apenas um cupom aplicado e permitir removê-lo | Regra de negócio | Média | PASS |
| UI-007 | — | Exibir estado de carrinho vazio | Exploratório | Baixa | PASS |
| UI-008 | — | Validar nome sem sobrenome | Partição inválida | Média | PASS |
| UI-009 | — | Validar e-mail inválido | Partição inválida | Média | PASS |
| UI-010 | — | Validar CEP com menos de 8 dígitos | Valor limite | Média | PASS |
| UI-011 | CA06 | Finalizar pedido válido com frete grátis | Happy path | Alta | PASS |
| UI-012 | CA02 | Aplicar cupom em letras minúsculas | Partição válida | Média | PASS |
| UI-013 | CA02 | Aplicar cupom com espaços no início/fim | Partição válida | Média | PASS |
| UI-014 | CA03 | Informar cupom inexistente e validar mensagem | Partição inválida | Alta | PASS |
| UI-015 | CA04 | Informar cupom expirado e validar mensagem | Partição inválida | Alta | PASS |
| UI-016 | CA06 | Aplicar frete grátis com subtotal exatamente R$ 200,00 | Valor limite | Alta | FAIL |
| UI-017 | CA08 | Manter frete grátis após aplicar BEMVINDO10 em subtotal de R$ 200,00 | Regra de negócio | Alta | FAIL |
| UI-018 | CA05 | Remover cupom atual e aplicar outro | Transição de estado | Média | PASS |
| UI-019 | — | Remover item e recalcular resumo | Exploratório | Média | PASS |
| UI-020 | — | Esvaziar carrinho e validar retorno ao estado vazio | Exploratório | Baixa | PASS |

## API — Produtos

| ID | Endpoint | Cenário | Esperado | Prioridade | Status |
|---|---|---|---|---|---|
| API-PROD-001 | GET /produtos | Listar produtos | 200 + lista | Média | PASS |
| API-PROD-002 | GET /produtos/P001 | Consultar produto existente | 200 + P001 | Média | PASS |
| API-PROD-003 | GET /produtos/P999 | Consultar produto inexistente | 404 PRODUTO_NAO_ENCONTRADO | Média | PASS |

## API — Carrinho

| ID | CA | Cenário | Esperado | Prioridade | Status |
|---|---|---|---|---|---|
| API-CAR-001 | CA01, CA07, CA09 | P005 x1 + BEMVINDO10 | subtotal 100; desc. 10; frete 19,90; total 109,90 | Alta | PASS |
| API-CAR-002 | CA02 | Cupom `  bemvindo10  ` | 200; cupom aplicado | Alta | PASS |
| API-CAR-003 | CA03 | Cupom inexistente | 200; desconto 0; "Cupom inválido." | Alta | PASS |
| API-CAR-004 | CA04 | VERAO2026 expirado | 200; desconto 0; "Cupom expirado." | Alta | PASS |
| API-CAR-005 | CA06, CA07 | Subtotal R$ 199,80 | frete 19,90; faltante 0,20 | Alta | PASS |
| API-CAR-006 | CA06 | Subtotal R$ 200,00 | frete 0; freteGratis true | Alta | FAIL |
| API-CAR-007 | CA08 | Subtotal 200 + BEMVINDO10 | desc. 20; frete 0; total 180 | Alta | FAIL |
| API-CAR-008 | CA11 | Exemplo doc: P002 x1 + P004 x2 | subtotal 239,70; desc. 23,97; total 215,73 | Alta | PASS |
| API-CAR-009 | CA10 | Quantidade 5 | 200 | Alta | PASS |
| API-CAR-010 | CA10 | Quantidade 6 | 422 QUANTIDADE_MAXIMA_EXCEDIDA | Alta | FAIL |
| API-CAR-011 | — | Itens ausentes | 422 ITENS_OBRIGATORIOS | Média | PASS |
| API-CAR-012 | — | Lista de itens vazia | 422 ITENS_OBRIGATORIOS | Média | PASS |
| API-CAR-013 | — | Item sem quantidade | 422 ITEM_INVALIDO | Média | FAIL |
| API-CAR-014 | — | Produto inexistente | 422 PRODUTO_NAO_ENCONTRADO | Média | PASS |
| API-CAR-015 | — | Produto duplicado | 422 ITEM_DUPLICADO | Média | PASS |
| API-CAR-016 | CA10 | Quantidade 0 | 422 QUANTIDADE_INVALIDA | Alta | PASS |
| API-CAR-017 | CA10 | Quantidade fracionada | 422 QUANTIDADE_INVALIDA | Média | PASS |
| API-CAR-018 | CA10 | Quantidade string | 422 QUANTIDADE_INVALIDA | Média | PASS |

## API — Pedidos

| ID | Cenário | Esperado | Prioridade | Status |
|---|---|---|---|---|
| API-PED-001 | Pedido válido com BEMVINDO10 | 201 + número VZ-000000 + valores corretos | Alta | PASS |
| API-PED-002 | Pedido válido sem cupom | 201 | Média | PASS |
| API-PED-003 | CEP com hífen | 201 + CEP normalizado | Média | PASS |
| API-PED-004 | Nome sem sobrenome | 422 DADOS_INVALIDOS | Média | PASS |
| API-PED-005 | E-mail inválido | 422 DADOS_INVALIDOS | Média | PASS |
| API-PED-006 | CEP inválido | 422 DADOS_INVALIDOS | Média | PASS |
| API-PED-007 | Cupom inexistente | 422 CUPOM_INVALIDO | Alta | PASS |
| API-PED-008 | Cupom expirado | 422 CUPOM_EXPIRADO | Alta | PASS |
| API-PED-009 | Quantidade 6 | 422 QUANTIDADE_MAXIMA_EXCEDIDA | Alta | FAIL |

## Gherkin — cenários principais

```gherkin
Funcionalidade: Cupom de desconto e frete grátis

  Cenário: Aplicar BEMVINDO10 em um carrinho válido abaixo de R$ 200
    Dado que o carrinho possui 1 Mochila Urbana 20L no valor de R$ 100,00
    Quando aplico o cupom "BEMVINDO10"
    Então o desconto deve ser de R$ 10,00
    E o frete deve ser de R$ 19,90
    E o total deve ser de R$ 109,90

  Cenário: Obter frete grátis exatamente no limite de R$ 200
    Dado que o carrinho possui 2 Mochilas Urbanas 20L
    Quando o carrinho é calculado
    Então o subtotal deve ser de R$ 200,00
    E o frete deve ser grátis
    E o valor faltante para frete grátis deve ser R$ 0,00

  Cenário: Manter frete grátis após aplicar desconto
    Dado que o subtotal do carrinho é R$ 200,00
    Quando aplico o cupom "BEMVINDO10"
    Então o desconto deve ser de R$ 20,00
    E o total dos produtos após desconto deve ser R$ 180,00
    E o frete deve continuar grátis

  Cenário: Impedir mais de 5 unidades do mesmo produto
    Dado que um produto já possui 5 unidades no carrinho
    Quando tento adicionar a sexta unidade
    Então a aplicação deve impedir a operação
    E deve manter a quantidade máxima em 5 unidades
```
