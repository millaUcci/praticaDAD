import { useState } from "react";
import styles from "./App.module.css";
import ListaEstoque from "../ListaEstoque/ListaEstoque";
import FormularioProduto from "../FormularioProduto/FormularioProduto";
// import ItemEstoque from "../ItemEstoque/ItemEstoque";

export default function App() {
  const [itens, setItens] = useState([]);

  const addItem = (nome, qtEstoque, vlCompra, vlVenda) => {
    const newItem = {
      id: Date.now(),
      nome,
      qtEstoque,
      vlCompra,
      vlVenda
    };
    setItem([...itens, newItem]);
  };

  const addProduct = (itemId) => {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, qtEstoque: qtEstoque - 1 } : item
      )
    );
  };
  
  const removeProduct = (itemId) => {
    setItens(
      itens.map((item) =>
        item.id === itemId ? { ...item, qtEstoque: qtEstoque - 1 } : item
      )
    );
  };

  return (
    <div className={styles.aplicativo}>
      <h1 className={styles.titulo}>Gerenciador de Estoque</h1>
      <h2 className={styles.caixa}>Caixa: R$1000,00</h2>
      <FormularioProduto addItem={addItem} />
      <ListaEstoque
        itens={itens}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
}
