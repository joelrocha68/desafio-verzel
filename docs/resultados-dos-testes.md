# Resultados dos testes

## Resumo geral

### Frontend

- Cenários principais executados: **17 testes**
- Passaram: **15 testes**
- Falharam: **2 testes**

### API / Postman

- Na execução realizada no Postman foram executadas **74 asserções**
- Passaram: **67 asserções**
- Falharam: **7 asserções**
- As 7 falhas correspondem a **3 defeitos únicos**, não a 7 bugs.

## Frontend

| Resultado | Observação |
|---|---|
| PASS | Frete grátis acima de R$ 200 |
| PASS | Frete R$ 19,90 abaixo de R$ 200 |
| PASS | Permite 5 unidades |
| PASS | Bloqueia sexta unidade |
| PASS | Desconto e total corretos |
| PASS | Cupom aplicado com opção de remoção |
| PASS | Estado vazio |
| PASS | Validação de nome |
| PASS | Validação de e-mail |
| PASS | Validação de CEP |
| PASS | Pedido confirmado |
| PASS | `bemvindo10` aceito |
| PASS | Espaços no início/fim são ignorados |
| PASS | Mensagem "Cupom inválido." |
| PASS | Mensagem "Cupom expirado." |
| FAIL | Frete cobrado com subtotal exatamente R$ 200 |
| FAIL | Mesmo defeito permanece após cupom |

## API — falhas

| Resultado | Esperado | Obtido |
|---|---|---|
| FAIL | frete 0 em subtotal 200 | frete 19,90 |
| FAIL | frete 0 usando subtotal pré-desconto | frete 19,90 |
| FAIL | 422 `QUANTIDADE_MAXIMA_EXCEDIDA` | 200 |
| FAIL | 422 `ITEM_INVALIDO` | 422 `QUANTIDADE_INVALIDA` |
| FAIL | 422 `QUANTIDADE_MAXIMA_EXCEDIDA` | 201 |

## API — comportamentos

Passaram, entre outros:
- listagem e consulta de produtos;
- produto inexistente;
- BEMVINDO10 válido;
- cupom com letras minúsculas e espaços no início/fim;
- cupom inexistente no cálculo retorna 200 sem desconto;
- cupom expirado no cálculo retorna 200 sem desconto;
- subtotal R$ 199,80 cobra frete;
- exemplo de cálculo e arredondamento;
- quantidade 5 aceita;
- itens ausentes e vazios;
- produto inexistente no carrinho;
- item duplicado;
- quantidade zero, fracionada e string rejeitadas;
- pedido válido com e sem cupom;
- CEP normalizado;
- nome, e-mail e CEP inválidos;
- cupom inválido e expirado em pedidos;
- rota inexistente;
- método não permitido;
- JSON inválido.
