import "./Button.css";

function Button({ label, primary, disabled, onClick }) {
  return (
    <div
      className={`button ${primary ? "primary" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={!disabled ? onClick : null}
    >
      {label}
    </div>
  );
}

export default Button;
