import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux"
import { add } from "../redux/feature/orderSlice";

const MenuDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const order= useSelector((state)=>state.order.orderItems);

  const recipe = location?.state;

  const [showIngredients, setShowIngredients] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);
  const [favorite, setFavorite] = useState(false);

  if (!recipe) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const printRecipe = () => {
    window.print();
  };

  return (
    <div
      style={{
        background: "#f4f6f9",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "30px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <button onClick={() => navigate(-1)}>
              ← Back
            </button>

            <div>
              <button
                onClick={() => setFavorite(!favorite)}
                style={{
                  marginRight: "10px",
                }}
              >
                {favorite ? "❤️ Favorited" : "🤍 Favorite"}
              </button>

              <button onClick={printRecipe}>
                🖨️ Print
              </button>
            </div>
          </div>

          <h1
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            {recipe.name}
          </h1>

          <div
            style={{
              textAlign: "center",
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            {"⭐".repeat(Math.round(recipe.rating))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            <InfoCard title="Cuisine" value={recipe.cuisine} />
            <InfoCard title="Difficulty" value={recipe.difficulty} />
            <InfoCard title="Calories" value={recipe.caloriesPerServing} />
            <InfoCard title="Servings" value={recipe.servings} />
            <InfoCard title="Prep Time" value={`${recipe.prepTimeMinutes} min`} />
            <InfoCard title="Cook Time" value={`${recipe.cookTimeMinutes} min`} />
          </div>
         <button onClick={()=>{
          dispatch
          (add(recipe));
         }}className="bg-orange-600 text-white flex px-5 py-2 rounded-2xl content-center active:scale-90">Add to Order </button>
         <br />
          <button
            onClick={() => setShowIngredients(!showIngredients)}
          >
            {showIngredients
              ? "Hide Ingredients"
              : "Show Ingredients"}
          </button>

          {showIngredients && (
            <>
              <h2>🛒 Ingredients</h2>
              <ul>
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <button
            onClick={() => setShowInstructions(!showInstructions)}
          >
            {showInstructions
              ? "Hide Instructions"
              : "Show Instructions"}
          </button>

          {showInstructions && (
            <>
              <h2>👨‍🍳 Instructions</h2>
              <ol>
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </>
          )}

          <h2>🏷️ Tags</h2>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {recipe.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  background: "#ff6b35",
                  color: "#fff",
                  padding: "8px 12px",
                  borderRadius: "20px",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ title, value }) => (
  <div
    style={{
      padding: "15px",
      background: "#f8f9fa",
      borderRadius: "10px",
      textAlign: "center",
    }}
  >
    <h4>{title}</h4>
    <p>{value}</p>
  </div>
);

export default MenuDetails;