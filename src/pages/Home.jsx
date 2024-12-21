import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

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
    return (
      <>
        <Loading />
      </>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient !== "" && measure && measure !== "") {
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
      <div className="meal-wrapper bg-slate-100">
        <button onClick={fetchMeal}>Fetch New Meal</button>
        <div>
          <h1 className="font-medium text-xl">{meal.strMeal}</h1>
          <div className="meal-props flex gap-3 text-base mb-4 mt-4 ">
            <p className="px-4 py-2 bg-amber-800 opacity-60 cursor-default rounded-full text-white">
              Area: {meal.strArea}
            </p>
            <p className="px-4 py-2 bg-amber-800 opacity-60 cursor-default rounded-full text-white">
              Category: {meal.strCategory}
            </p>
            {meal.strTags && (
              <p className="px-4 py-2 bg-amber-800 opacity-60 cursor-default rounded-full text-white">
                Tags: {meal.strTags}
              </p>
            )}
          </div>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>

          <h2>Ingredients:</h2>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {videoId && (
            <div>
              <h2>Watch the recipe video:</h2>
              <iframe
                className="max-w-screen"
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
    </>
  );
};

export default Home;
