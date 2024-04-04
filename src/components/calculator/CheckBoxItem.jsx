const CheckBoxItem = ({ id, isChecked, checkHandler }) => {
  return (
    <div
      className="border border-off-white w-6 h-6 rounded cursor-pointer"
      onClick={() => checkHandler(id)}
    >
      {isChecked && <img src="/icons/check.svg" className="p-[2px]" />}
    </div>
  );
};

export default CheckBoxItem;
