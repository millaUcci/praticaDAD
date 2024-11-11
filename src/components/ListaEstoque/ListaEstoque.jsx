import styles from "./ListaEstoque.module.css";
import ItemEstoque from "../ItemEstoque/ItemEstoque";

function ListaEstoque({ itens, addProduct, removeProduct }) {
  return (
    <div className={styles.listaEstoque}>
      <ul>
        <h2>Estoque Atual</h2>
        {itens.map((item) => (
          <ItemEstoque
            item={item}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaEstoque;
