const index = () => {
  return (
    <div className="mt-28 gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
      <div className="rounded-2xl border-gray-900 border transition-all bg-gray-900 p-10 space-y-20 shadow-xl hover:bg-gray-800 hover:border-deep-purple hover:border">
        <img src="/icons/head-icon.svg" />
        <p className="text-lg">
          We offer support to assist you whenever a question arise and we offer
          time to assist you with customizing your platform once it is deployed.
        </p>
      </div>
      <div className="rounded-2xl border-gray-900 border transition-all bg-gray-900 p-10 space-y-20 shadow-xl hover:bg-gray-800 hover:border-deep-purple hover:border">
        <img src="/icons/bar-icon.svg" />
        <p className="text-lg">
          We offer support to assist you whenever a question arise and we offer
          time to assist you with customizing your platform once it is deployed.
        </p>
      </div>
      <div className="rounded-2xl border-gray-900 border transition-all bg-gray-900 p-10 space-y-20 shadow-xl hover:bg-gray-800 hover:border-deep-purple hover:border">
        <img src="/icons/light-icon.svg" />
        <p className="text-lg">
          We offer support to assist you whenever a question arise and we offer
          time to assist you with customizing your platform once it is deployed.
        </p>
      </div>
    </div>
  );
};

export default index;
