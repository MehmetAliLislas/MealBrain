import React from "react";

const Loading = () => {
  return (
    <div className="h-screen bg-slate-100 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-10 lg:px-20 h-[calc(100vh-200px)]">
        <h4 className="text-xl xl:text-4xl font-medium">
          Your Meal is Being Prepared!
        </h4>
        <img
          src="src/assets/loading-gif.gif"
          alt="404"
          className="h-64 md:h-96 object-contain rounded-xl mt-5 md:mt-10 xl:mt-20"
        />
      </div>
    </div>
  );
};

export default Loading;