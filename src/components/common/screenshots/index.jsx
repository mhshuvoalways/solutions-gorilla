const index = ({ image }) => {
  return (
    <>
      <img src={image} className="block opacity-0" />
      <img
        src={image}
        style={{
          boxShadow: "0 12px 48px rgba(0, 0, 0, .3)",
        }}
        className="absolute rounded-xl blur-[1px] border left-4 top-4 opacity-40"
      />
      <img
        src={image}
        style={{
          boxShadow: "0 12px 48px rgba(0, 0, 0, .3)",
        }}
        className="absolute rounded-xl blur-[1px] border left-3 top-3 opacity-40"
      />
      <img
        src={image}
        style={{
          boxShadow: "0 12px 48px rgba(0, 0, 0, .3)",
        }}
        className="absolute rounded-xl blur-[1px] border left-2 top-2 opacity-40"
      />
      <img
        src={image}
        style={{
          boxShadow: "0 12px 48px rgba(0, 0, 0, .3)",
        }}
        className="absolute rounded-xl blur-[1px] border left-1 top-1 opacity-40"
      />
      <img
        src={image}
        style={{
          boxShadow: "0 12px 48px rgba(0, 0, 0, .3)",
        }}
        className="absolute rounded-xl left-0 top-0"
      />
    </>
  );
};

export default index;
