const MainMenus = ({ setSelectItem, selectItem, item }) => {
  return (
    <div
      className={`flex items-center p-5 hover:bg-sheer-white gap-6 rounded-lg cursor-pointer justify-between border-sheer-white border hover:border-deep-purple transition-all ${
        selectItem.id === item.id && "border-deep-purple"
      }`}
      onClick={() => setSelectItem(item)}
    >
      <img src={item.icon} />
      <p className="text-lg text-white font-semibold">{item.title}</p>
      <img src="/icons/chevron-right.svg" />
    </div>
  );
};

export default MainMenus;
