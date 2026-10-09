# Ambiguidades que achei

## 1 — "Primeira compra"

A página apresenta o cupom `BEMVINDO10` como benefício de primeira compra. Mas o ambiente informado na documentação não persiste pedidos e nem mantém histórico de clientes.

Por esse motivo, não é possível validar se o cliente já realizou uma compra anteriormente. Para os testes, considerei o cupom válido conforme os critérios de aceite apresentados.

## 2 — Persistência

A ausência de persistência entre abas e chamadas não foi tratada como defeito, pois esse comportamento está informado na documentação do ambiente.

## 3 — Limite do frete

Como a API recebe `produtoId` e quantidade, e não aceita um preço qualquer informado manualmente, para validar um valor abaixo de R$ 200 foi utilizada uma combinação dos produtos disponíveis que totaliza R$ 199,80.
