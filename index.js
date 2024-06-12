import {Tabela} from "./Tabela.js";

document.addEventListener('DOMContentLoaded',function(){

    const btn = document.querySelector('button');

    const painel = document.querySelector('.painel');

    btn.addEventListener('click',function(){

        const qtdLinhas = Number(document.querySelector('.linhas').value);
        const qtdColunas = Number(document.querySelector('.colunas').value);

        const tabela = new Tabela(qtdLinhas,qtdColunas);

        tabela.gerarTabela(painel);

    });

});