import styles from "./ItemEstoque.module.css";
import { useState } from "react";

function ItemEstoque({ item, addProduct, removeProduct }) {
  return (
    <>
      <div className={styles.produtoItem}>
        <p className={styles.nomeProduto}>{item.nome}</p>
        <p className={styles.quantidadeProduto}>{item.qtEstoque}</p>
        <p className={styles.valorProduto}>{item.vlCompra}</p>

        <div className={styles.botoesAcoes}>
          <button
            onClick={() => addProduct(item.id)}
            className={styles.botaoComprar}
          >
            +
          </button>
          <button
            onClick={() => removeProduct(item.id)}
            className={styles.botaoVender}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemEstoque;
