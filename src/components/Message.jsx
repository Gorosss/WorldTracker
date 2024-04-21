import styles from "../css/Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      {message}
    </p>
  );
}

export default Message;
