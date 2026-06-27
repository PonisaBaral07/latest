import React from 'react'
import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate } from 'react-router';

const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate= useNavigate()
  const getRecipes = async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    console.log(res.data.recipes);
    setRecipes(res.data.recipes);
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return(
    <div>
      <h1 className="text-center text-4xl font-semibold py-4">Our Menu</h1>
    <div className=" flex flex-wrap   justify-center py-16  gap-12">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="flex flex-col items-center gap-2">
                <img
                onClick={()=>{
                     navigate(`/menu/${recipe.id}`, {state:recipe});
                }}
                  src={recipe.image}
                  alt={recipe.name}
                  className="h-64 w-74 object-cover rounded-2xl"
                />
                <h2 className="font-semibold text-xl">{recipe.name}</h2>
                <p className="font-semibold">
                  {" "}
                  रु
                  <span className="text-orange-600">
                    {recipe.caloriesPerServing}
                  </span>
                </p>
              </div>
            ))}
            </div>
            </div>
  )}
            
export default Menu