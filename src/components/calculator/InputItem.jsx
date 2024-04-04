const InputItem = ({ placeholder, value, onChangeHandler, id }) => {
  return (
    <input
      type="number"
      className="bg-white p-2 focus:ring ring-deep-purple outline-0 w-full text-rich-black"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChangeHandler(event, id)}
      name={value}
    />
  );
};

export default InputItem;
