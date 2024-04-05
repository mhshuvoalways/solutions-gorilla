const PriceItem = ({ item }) => {
  return (
    <div className="bg-sheer-white rounded-3xl p-6 shadow-md">
      <p className="text-lg text-white tracking-wider">{item.title}</p>
      <p className={"mt-6 text-white text-5xl"}>{item.price}</p>
      <p className="font-semibold text-lg mt-1">{item.timeline}</p>
      <p
        className="h-[1px] w-full my-5"
        style={{
          backgroundImage: `linear-gradient(to right, #fff, transparent)`,
        }}
      />
      {item.description.map((des, index) => (
        <p key={index} className="text-lg font-medium">
          {des}
          <br />
          <br />
        </p>
      ))}
      <div className="mt-16">
        <p className="text-white tracking-wide">INCLUDES:</p>
        <div className="mt-5 space-y-2">
          {item.includes.map((include, index) => (
            <div className="flex items-center gap-3" key={index}>
              <img src="/icons/check.svg" className="w-5" />
              <p className="font-bold">{include}</p>
            </div>
          ))}
        </div>
      </div>
      {item.bottomText && (
        <div className="mt-16 space-y-3 text-sm font-medium">
          {item?.bottomText?.map((el, index) => (
            <p key={index}>* {el}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceItem;
