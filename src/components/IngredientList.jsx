import React, { useState } from "react";

const IngredientList = ({ ingredients }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (index) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(index)
        ? prevSelectedItems.filter((item) => item !== index)
        : [...prevSelectedItems, index]
    );
  };

  return (
    <ul className="list-decimal pl-4 text-sm py-4 lg:text-base text-gray-700">
      {ingredients.map((item, index) => (
        <li
          key={index}
          onClick={() => handleSelect(index)}
          className={`bg-gray-100 p-2 rounded-lg shadow-md mt-2 cursor-pointer ${
            selectedItems.includes(index)
              ? "bg-amber-100 border-amber-800 border-2"
              : "hover:bg-gray-200"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
