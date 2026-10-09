# Estrategia de Testes

## 1. Objetivo

Validar a entrega de cupom de desconto e frete grátis na Verzel Store, cobrindo parte de frontend e API, com cenários de regras de negócio, cálculos, validações e erros.

## 2. Abordagem

Foram utilizadas:
- testes funcionais positivos e negativos;
- particionamento de equivalência;
- análise de valor limite;
- testes baseados em risco;
- validação da API;
- testes exploratórios no frontend;
- observação dos critérios de aceite.

## 3. Principais riscos

| Risco | Impacto | Prioridade |
|---|---:|---:|
| Desconto calculado incorretamente | Alto | Alta |
| Frete grátis aplicado no limite errado | Alto | Alta |
| Desconto alterar indevidamente a regra de frete | Alto | Alta |
| Cupom inválido e expirado aplicado | Alto | Alta |
| API aceitar mais de 5 unidades | Médio/Alto | Alta |
| Divergência entre cálculo da API e interface | Alto | Alta |
| Dados inválidos permitirem confirmação de pedido | Médio | Média |
| Erro de arredondamento de dinheiro | Médio | Média |

## 4. Técnicas aplicadas

### Análise de valor limite

- quantidade: `1`, `5`, `6`;
- frete grátis: valor abaixo disponível pelos produtos (`R$ 199,80`), exatamente `R$ 200,00` e acima (`R$ 229,90`).

### Particionamento de equivalência

- cupom válido;
- cupom expirado;
- cupom inexistente;
- quantidade válida;
- quantidade zero, fracionada e em formato inválido;
- dados de cliente válidos e inválidos.
