import { Utils } from './Utils.js';
import { Tabela } from './Tabela.js';

const init = () => {
    const cp1 = Utils.$('txtlinha');
    const cp2 = Utils.$('txtcoluna');
    const btn = Utils.$('btngerar');
    const painel = Utils.$('dpainel');

    btn.addEventListener('click',() => {
        painel.textContent = '';
        const tb1 = new Tabela(cp1.value, cp2.value);
        //tb1.linhas = cp1.value;
        //tb1.colunas = cp2.value;
        painel.appendChild(tb1.montaTabelaHtml('step'));
    });
};

document.addEventListener('DOMContentLoaded', init);