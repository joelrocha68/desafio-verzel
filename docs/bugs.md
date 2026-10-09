# Bug Reports

Foram confirmados **3 defeitos** durante a execução.

---

## BUG 1 — Frete grátis não é aplicado quando o subtotal é exatamente R$ 200,00

**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Verzel Store  
**Versão:** 2.3.0

### Pré-condição

Carrinho com subtotal exatamente igual a R$ 200,00.

### Passos para reproduzir pelo frontend

1. Adicionar 2 unidades da Mochila Urbana 20L (`P005`), R$ 100,00 cada.
2. Acessar o carrinho.
3. Observar o resumo do pedido.

### Resultado atual

- Subtotal: R$ 200,00
- Frete: R$ 19,90
- Total: R$ 219,90
- A tela informa: `Faltam R$ 0,00 para o frete grátis.`

Ao aplicar `BEMVINDO10`, o subtotal continua R$ 200,00, o desconto é R$ 20,00 e o frete continua sendo cobrado em R$ 19,90.

### Resultado esperado

Conforme a documentação, compras com subtotal **a partir de R$ 200,00**, inclusive, devem ter frete grátis.

Sem cupom:
- frete: R$ 0,00
- total: R$ 200,00

Com BEMVINDO10:
- subtotal: R$ 200,00
- desconto: R$ 20,00
- frete: R$ 0,00
- total: R$ 180,00

### API

`POST /api/carrinho/calcular` também retorna `frete: 19.9` para subtotal igual a R$ 200,00.

---

## BUG 2 — API aceita quantidade maior que 5 unidades por produto

**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Verzel Store API

### Contexto

Na tela é impedida a sexta unidade, mas a API não aplica a mesma regra.

### Passos — cálculo do carrinho

Enviar:

```json
{
  "itens": [
    {
      "produtoId": "P004",
      "quantidade": 6
    }
  ]
}
```

para:

`POST /api/carrinho/calcular`

### Resultado atual

A API responde `200` e aceita a quantidade 6.

### Resultado esperado

A API deveria responder:

- HTTP `422`
- código `QUANTIDADE_MAXIMA_EXCEDIDA`

### Passos — confirmação do pedido

Enviar um pedido com dados válidos do cliente e o item abaixo:

```json
{
  "produtoId": "P004",
  "quantidade": 6
}
```

para:

`POST /api/pedidos`

### Resultado atual

A API responde `201` e confirma o pedido.

### Resultado esperado

A API deveria responder:

- HTTP `422`
- código `QUANTIDADE_MAXIMA_EXCEDIDA`

---

## BUG 3 — Item sem o campo quantidade retorna código de erro diferente da documentação da API

**Severidade:** Média  
**Prioridade:** Média  
**Ambiente:** Verzel Store API

### Passos para reproduzir

Enviar para `POST /api/carrinho/calcular`:

```json
{
  "itens": [
    {
      "produtoId": "P001"
    }
  ]
}
```

### Resultado atual

- HTTP `422`
- código: `QUANTIDADE_INVALIDA`

### Resultado esperado

A documentação define `ITEM_INVALIDO` quando um item não é um objeto com `produtoId` e `quantidade`. Como o campo `quantidade` está ausente, o código esperado é:

- HTTP `422`
- código: `ITEM_INVALIDO`

### Impacto

O status HTTP continua correto, porém o contrato de erro documentado não é respeitado, o que pode afetar consumidores da API que tratem erros pelo campo `erro.codigo`.
