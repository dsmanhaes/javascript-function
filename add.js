const prompt = require('prompt-sync')();

function addToList (list) {
  const position = list.length;
  const item = prompt('Digite o novo item da lista: ');
  list[position] = item;
  console.log(`\n${item} foi adicionado na lista!`);
}

module.exports = addToList;
