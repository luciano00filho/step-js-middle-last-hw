
/**
 * @jest-environment jsdom
 */

const fn = require('./Tabela.js');

test('Mostra uma tabela 3x3 ', () => {
    // Configure nosso corpo do documento
    document.body.innerHTML =
      '<div>' +
      '  <button id="btngerar" />' +
      '</div>' +
      '<div id="painel"></div>';
  
    document.getElementById('btngerar').addEventListener('click',() => {
      const tabela = new fn.Tabela(3,3);
      tabela.gerarTabela(painel)
    });
    
    // Usa o jquery para simular um clique no nosso botão
    document.getElementById('btngerar').click();
  
    expect(document.getElementById('painel').innerHTML).toBe(`<table><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>`);
  });
