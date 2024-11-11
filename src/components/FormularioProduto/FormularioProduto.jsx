import styles from "./FormularioProduto.module.css"
import { useState } from "react";

function FormularioProduto({ addItem }){
    const [inputNome, setInputNome] = useState('');
    const [inputEstoque, setInputEstoque] = useState('');
    const [inputCompra, setInputCompra] = useState('');
    const [inputVenda, setInputVenda] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputNome.trim() !== '') {
            addItem(inputNome, inputEstoque, inputCompra, inputVenda);
            setInputNome('');
            setInputEstoque('');
            setInputCompra('');
            setInputVenda('');
        }
    };

    
    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.formulario}>
            <input
                className={styles.input}
                type="text"
                placeholder="Nome"
                value={inputNome}
                onChange={(e) => setInputNome(e.target.value)}
            />
            <input
                className={styles.input}
                type="text"
                placeholder="Quantidade em Estoque"
                value={inputEstoque}
                onChange={(e) => setInputEstoque(e.target.value)}
            />
            <input
                className={styles.input}
                type="text"
                placeholder="Valor da Compra"
                value={inputCompra}
                onChange={(e) => setInputCompra(e.target.value)}
            />
            <input
                className={styles.input}
                type="text"
                placeholder="Valor da Venda"
                value={inputVenda}
                onChange={(e) => setInputvenda(e.target.value)}
            />
            <button className={styles.botao} type="submit">Adicionar Produto</button>
        </form>
    );
}

export default FormularioProduto;