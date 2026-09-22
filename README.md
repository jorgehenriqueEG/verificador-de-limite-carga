# Verificador de Limite de Carga

## Descrição do Problema

Uma equipe de manutenção precisa saber se as estações de trabalho de um laboratório de rede ultrapassaram o limite de capacidade de rede.

## Requisitos

- Receber um array de objetos contendo o nome da estação e o tráfego em Mbps
- Considerar o limite de capacidade padrão em 150 Mbps
- Marcar as estações que ultrapassaram o limite
- Exibir o resultado no console

## Exemplo de Uso

const estacoes = [{nome: "Est-01", trafego: 120}, {nome: "Est-02", trafego: 180}, {nome: "Est-03", trafego: 90}];

Saída:

Est-01: OK
Est-02: ACIMA DO LIMITE
Est-03: OK