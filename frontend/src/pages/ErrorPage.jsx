import React from "react";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-main overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-10 lg:px-20 h-[calc(100vh-200px)]">
        <img
          src="/assets/404.png"
          alt="404"
          className="h-64 md:h-96 object-contain rounded-xl mt-5 md:mt-10 xl:mt-20"
        />
        <div className="text-center">
          <h3 className="font-medium text-2xl sm:text-3xl md:text-4xl">
            Oops! Sayfa Bulunamadı
          </h3>
          <h5 className="text-lg sm:text-lg mt-7">
            Görünüşe göre aradığınız sayfa mevcut değil veya taşınmış <br />
            Endişelenmeyin, bu hepimizin başına gelir!
          </h5>
          <h5 className="text-lg sm:text-lg mt-5">
            <a
              href="/"
              className="text-orange-600 opacity-70 hover:opacity-100"
            >
              Ana Sayfaya
            </a>{" "}
            geri dönebilir veya ihtiyacınız olanı aramayı deneyebilirsiniz.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
