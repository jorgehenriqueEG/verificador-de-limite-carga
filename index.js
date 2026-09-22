const estacoes = [
  { nome: "Est-01", trafego: 120 },
  { nome: "Est-02", trafego: 180 },
  { nome: "Est-03", trafego: 90 }
];

const limite = 150;

for (let i = 0; i < estacoes.length; i++) {
  const est = estacoes[i];
  let status = "OK";
  if (est.trafego > limite) {
    status = "ACIMA DO LIMITE";
  }
  console.log(est.nome + ": " + status);
}