import React from "react";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-main overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-10 lg:px-20 h-[calc(100vh-200px)]">
        <img
          src="src/assets/404.png"
          alt="404"
          className="h-64 md:h-96 object-contain rounded-xl mt-5 md:mt-10 xl:mt-20"
        />
        <div className="text-center">
          <h3 className="font-medium text-2xl sm:text-3xl md:text-4xl">
            Oops! Page Not Found
          </h3>
          <h5 className="text-lg sm:text-lg mt-7">
            It seems like the page you are looking for doesn't exist or has been
            moved. <br />
            Don't worry, this happens to the best of us!
          </h5>
          <h5 className="text-lg sm:text-lg mt-5">
            You can go back to{" "}
            <a
              href="/"
              className="text-orange-600 opacity-70 hover:opacity-100"
            >
              Home Page
            </a>{" "}
            or try searching for what you need.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
