import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import IngredientList from "../components/IngredientList";
import { QRCodeSVG } from "qrcode.react";
import useMediaQuery from "@mui/material/useMediaQuery";
import GoogleTranslate from "../components/GoogleTranslate";

const Home = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMeal = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        setMeal(data.meals[0]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching meal:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${ingredient}: ${measure}`);
    }
  }

  const getYouTubeVideoId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = meal.strYoutube ? getYouTubeVideoId(meal.strYoutube) : null;

  return (
    <>
      <Navbar />
      <GoogleTranslate />
      <div className="meal-container bg-main h-full py-8 ">
        <div className="meal-wrapper border border-opacity-35 border-amber-700 bg-container shadow-gray-500 shadow-2xl rounded-xl p-6 lg:p-10 mx-4 sm:mx-6 md:mx-10 lg:mx-20">
          <div>
            <div className="meal-info grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="object-cover w-full aspect-[4/3] rounded-lg"
              />
              <div>
                <div className="meal-props flex gap-3 mb-4 py-4 overflow-auto">
                  <p className="px-4 py-2 text-xs lg:text-base bg-amber-800 opacity-60 hover:opacity-100 rounded-full text-nowrap text-white">
                    Area: {meal.strArea}
                  </p>
                  <p className="px-4 py-2 text-xs lg:text-base bg-amber-800 opacity-60 hover:opacity-100 rounded-full text-nowrap text-white">
                    Category: {meal.strCategory}
                  </p>
                  {meal.strTags && (
                    <p className="px-4 py-2 text-xs lg:text-base bg-amber-800 opacity-60 hover:opacity-100 rounded-full text-nowrap text-white">
                      Tags: {meal.strTags}
                    </p>
                  )}
                </div>
                <h1 className="font-medium text-4xl mb-4">{meal.strMeal}</h1>
                <p className="text-sm">{meal.strInstructions}</p>
              </div>
            </div>
            <div className="page-break border-[1px] border-amber-700 opacity-60 mt-10"></div>
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="lg:w-2/4 w-full">
                <h2 className="font-medium text-2xl notranslate">
                  İçindekiler
                </h2>
                <p className="italic opacity-75 text-sm notranslate">
                  *Mevcut malzemelerinizi listeye tıklayarak seçebilirsiniz
                </p>
                <IngredientList ingredients={ingredients} />
              </div>
              <div className="lg:w-2/4 w-full">
                {videoId && (
                  <div>
                    <h2 className="text-xl lg:text-2xl font-medium text-nowrap mb-4 notranslate">
                      Tarif videosunu izleyin
                    </h2>
                    <iframe
                      className="max-w-screen h-96 w-full rounded-lg"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="qr-code flex items-center justify-center flex-col mt-10">
            <p className="text-center flex justify-center mb-5 lg:text-base px-2 text-sm font-medium font-italic notranslate">
              Detaylı tarifi görüntülemek için tıklayın veya QR kodu taratın
            </p>
            <a
              href={meal.strSource}
              target={`${meal.strSource}`}
              rel="noopener noreferrer"
            >
              <QRCodeSVG
                className="shadow-md shadow-gray-400 rounded-xl p-2 bg-slate-50 duration-150 hover:scale-95"
                value={`${meal.strSource}`}
                size={256}
              />
            </a>
          </div>
          <div className="flex justify-center items-center mt-12 mb-6">
            <button
              onClick={fetchMeal}
              className="group flex gap-3 justify-center items-center rounded-full bg-amber-800 text-lg text-white px-6 py-2 hover:bg-amber-900 transition-transform duration-300 ease-linear shadow-md opacity-60 hover:opacity-100 transform hover:scale-110"
            >
              <img
                src="/assets/ai.svg"
                alt="AI"
                className="fill-white w-8 h-8 transition-transform duration-500 group-hover:rotate-180"
              />
              <span className="transition-transform duration-300 text-xs lg:text-base md:text-base">
                Yeni Yemek Oluştur!
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
