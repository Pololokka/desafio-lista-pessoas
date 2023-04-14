const Button = ({ value, name, handleOnClick }) => {
  return (
    <input
      type="button"
      value={value}
      name={name}
      className="texto btn__geral"
      onClick={handleOnClick}
    />
  );
};

export default Button;
