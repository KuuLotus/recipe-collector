import { useState } from "react";
import "./App.css";

function App() {
  const [newRecipe, setNewRecipe] = useState("");
  const [newDetails, setNewDetails] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [showDetails, setShowDetails] = useState(null);

  const addRecipe = (e) => {
    e.preventDefault();
    if (!newRecipe.trim()) return;
    setRecipes([
      ...recipes,
      { id: Date.now(), name: newRecipe, details: newDetails },
    ]);
    setNewRecipe("");
    setNewDetails("");
  };

  return (
    <div className="app-container">
      <h2>料理レシピ共有アプリ</h2>
      <form onSubmit={addRecipe}>
        <input
          type="text"
          placeholder="新しいレシピ名を追加..."
          className="recipe-input"
          value={newRecipe}
          onChange={(e) => setNewRecipe(e.target.value)}
        />
        <textarea
          className="recipe-details-input"
          placeholder="レシピの詳細を入力..."
          value={newDetails}
          onChange={(e) => setNewDetails(e.target.value)}
        ></textarea>
        <button type="submit" className="add-recipe-btn">
          レシピを追加
        </button>
      </form>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="recipe-item"
            onClick={() =>
              setShowDetails(recipe.id === showDetails ? null : recipe.id)
            }
          >
            {recipe.name}
          </li>
        ))}
      </ul>
      {showDetails && (
        <p className="recipe-details">
          {recipes.find((recipe) => recipe.id === showDetails)?.details ||
            "詳細がありません。"}
        </p>
      )}
      <div className="">レシピ総数: {recipes.length}</div>
    </div>
  );
}

export default App;
