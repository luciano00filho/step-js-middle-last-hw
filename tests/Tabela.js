class Tabela {
    #linhas;
    #colunas;

    set linhas(l){
        this.#linhas = Number(l);
    }
    get getLinhas(){
        return this.#linhas;
    }

    set colunas(c){
        this.#colunas = Number(c);
    }
    get getColunas(){
        return this.#colunas;
    }

    constructor(row,col){
        this.#linhas = Number(row);
        this.#colunas = Number(col);
    }

    montaTabelaHtml(preenchimentoPadrao){
        let tb = document.createElement('table');
        
        for(let i = 0; i < this.getLinhas; i++){
            let trow = document.createElement('tr');
            
            for(let j = 0; j < this.getColunas; j++){
                let tcel = document.createElement('td');
                tcel.innerHTML = preenchimentoPadrao;
                trow.appendChild(tcel);
            }
            tb.appendChild(trow);
        }
        return tb;
    }
}

module.exports = { Tabela };