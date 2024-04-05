const ButtonArrow = ({ title }) => {
  return (
    <div className="mt-20 flex items-center justify-center gap-2 text-white font-bold text-xl cursor-pointer bg-sheer-white w-56 mx-auto rounded-full p-2 shadow-xl hover:bg-white hover:text-black feature-btn transition-all">
      <button>{title}</button>
      <img src="/icons/arrow-bottom.svg" className="w-5 transition-all" />
    </div>
  );
};

export default ButtonArrow;
