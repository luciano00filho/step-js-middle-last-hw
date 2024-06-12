class Tabela {

    constructor(linhas,colunas) {

        this.linhas = linhas;
        this.colunas = colunas;

    }

    gerarTabela(painel) {

        painel.innerHTML='';

        let tabela = document.createElement('table');

        for (let i = 0; i < this.linhas; i++) {

            let linhaTr = document.createElement('tr');

            for (let i = 0; i < this.colunas; i++) {

                let linhaTd = document.createElement('td');
                linhaTd.innerHTML = '&nbsp';

                linhaTr.appendChild(linhaTd);

            }

            tabela.appendChild(linhaTr);

        }

        painel.appendChild(tabela);

    }

}

module.exports = { Tabela };

