/**
 * @jest-environment jsdom
 */
const fn = require('./Tabela.js');

test('Mostra uma tabela de 2 linhas e 1 coluna', () => {
  // Configure nosso corpo do documento
  document.body.innerHTML =
    '<div>' +
    '  <button id="btngerar" />' +
    '</div>' +
    '<div id="painel"></div>';

  document.getElementById('btngerar').addEventListener('click',() => {
    const tb1 = new fn.Tabela(2,1);
    document.getElementById('painel').appendChild(tb1.montaTabelaHtml('step'));
  });
  
  // Usa o jquery para simular um clique no nosso botão
  document.getElementById('btngerar').click();

  expect(document.getElementById('painel').innerHTML).toBe(`<table><tr><td>step</td></tr><tr><td>step</td></tr></table>`);
});