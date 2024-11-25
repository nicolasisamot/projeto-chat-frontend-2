import styles from "./CampoForm.module.css";

function CampoForm({
  label,
  type,
  value,
  onChange,
  erro,
  placeholder,
  sucesso,
}) {
  return (
    <div className={styles.campo}>
      <label className={styles.label}>{label}</label>
      <input
        className={
          styles.input +
          (erro ? " " + styles.erro : "") +
          (sucesso ? " " + styles.sucesso : "")
        }
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
export default CampoForm;
