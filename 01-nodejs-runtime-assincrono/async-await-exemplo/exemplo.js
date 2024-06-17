const promisePraFazerAlgumaCoisa = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Eu fiz alguma coisa', 5000))
  });
};

const assistirAlguemFazendoAlgumaCoisa = async () => {
  const something = await promisePraFazerAlgumaCoisa();
  return something + '\n e Eu vi você fazendo';
};

const assistirAlguemAssistindoAlguemFazendoAlgumaCoisa = async () => {
  const something = await assistirAlguemFazendoAlgumaCoisa();
  return something + '\n e Eu também vi você vendo ele fazendo';
};

assistirAlguemAssistindoAlguemFazendoAlgumaCoisa().then(res => {
  console.log(res);
});