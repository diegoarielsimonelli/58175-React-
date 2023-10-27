import styles from "./Tarjeta.module.css";

function Tarjeta(props) {
  return (
    <div className={styles.contenedor}>
      <img src={props.img} alt='Tarjeta' />
      <p className={styles.texto}>{props.children}</p>
    </div>
  );
}

export default Tarjeta;
