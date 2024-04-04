const ProgressBar = ({ progressHeight }) => {
  return (
    <div className="h-[400px] flex items-end">
      <div
        className={`relative bottom-0 w-[70px] mx-auto mt-5 transition-all duration-700`}
        style={{ height: `${progressHeight}%` }}
      >
        <p className="bg-sheer-white rounded absolute inset-0" />
        <p
          className="absolute inset-0 rounded"
          style={{
            backgroundImage: `linear-gradient(180deg, #fff, rgba(0, 0, 0, 0))`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
