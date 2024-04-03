const Description = ({ selectItem }) => {
  return (
    <>
      <p className="text-2xl font-semibold text-white">
        {selectItem.description.title}
      </p>
      <div className="mt-5 text-lg">
        {selectItem.description.details.map((detail, index) => (
          <p key={index}>
            <strong className="font-bold">{detail.topic}: </strong>
            {detail.more}
            <br />
            <br />
          </p>
        ))}
      </div>
    </>
  );
};

export default Description;
