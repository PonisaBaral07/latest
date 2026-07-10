import React, { useEffect, useState } from "react";
import axios from "axios";

const AllergyAdvice = () => {
  const [recipes, setRecipes] = useState([]);

  const commonAllergens = [
    "milk",
    "egg",
    "eggs",
    "peanut",
    "peanuts",
    "tree nuts",
    "almond",
    "cashew",
    "walnut",
    "soy",
    "wheat",
    "gluten",
    "fish",
    "shellfish",
    "shrimp",
    "crab",
    "sesame",
  ];

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/recipes");
        setRecipes(res.data.recipes);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipes();
  }, []);

  const findAllergens = (ingredients) => {
    return ingredients.filter((ingredient) =>
      commonAllergens.some((allergen) =>
        ingredient.toLowerCase().includes(allergen)
      )
    );
  };

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-4">
        Allergy Advice
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Please check ingredients carefully before ordering. If you have food
        allergies, inform our staff. The information below is for guidance only
        and ingredients may change.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => {
          const allergens = findAllergens(recipe.ingredients);

          return (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-3">
                  {recipe.name}
                </h2>

                <h3 className="font-semibold text-gray-700 mb-2">
                  Possible Allergens
                </h3>

                {allergens.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {allergens.map((item, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-green-600 font-medium">
                    No common allergens detected.
                  </p>
                )}

                <div className="mt-5">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Ingredients
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-xl max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-700 mb-3">
          Important Notice
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Always inform staff about any food allergies.</li>
          <li>Cross-contamination may occur during food preparation.</li>
          <li>Ingredient suppliers may change without prior notice.</li>
          <li>If you have severe allergies, consult our staff before ordering.</li>
        </ul>
      </div>
    </div>
  );
};

export default AllergyAdvice;