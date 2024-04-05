const InputCard = ({ item, bg, children }) => {
  return (
    <div
      className={`${
        bg && "bg-sheer-white rounded-lg"
      } flex items-center flex-wrap sm:flex-nowrap px-3 py-6 sm:px-6 gap-3`}
    >
      <p className="text-white font-semibold w-full sm:w-7/12 text-center">
        {item}
      </p>
      <div className="w-full sm:w-5/12">{children}</div>
    </div>
  );
};

export default InputCard;
