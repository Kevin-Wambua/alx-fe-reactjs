// src/components/FavoritesList.jsx
import { useRecipeStore } from '../stores/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((r) => r.id === id))
      .filter(Boolean)
  );

  return (
    <div>
      <h2>⭐ My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: 10 }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
