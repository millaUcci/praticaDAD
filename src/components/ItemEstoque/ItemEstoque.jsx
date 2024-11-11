import styles from "./ItemEstoque.module.css";
import { useState } from "react";

function ItemEstoque({ item, addProduct, removeProduct }) {
  return (
    <>
      <div className={styles.produtoItem}>
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
