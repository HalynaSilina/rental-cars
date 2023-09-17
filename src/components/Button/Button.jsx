import css from "./Button.module.css";

const Button = ({ type = "button", text, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={css.button}>
      {text}
    </button>
  );
};

export default Button;
