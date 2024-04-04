const InputCard = ({ item, bg, children }) => {
  return (
    <div
      className={`${
        bg && "bg-sheer-white rounded-lg"
      } flex items-center p-6 gap-3`}
    >
      <p className="text-white font-semibold w-7/12 text-center">{item}</p>
      <div className="w-5/12">{children}</div>
    </div>
  );
};

export default InputCard;
