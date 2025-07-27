// src/components/RecipeDetails.jsx
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useRecipeStore } from '../stores/recipeStore';

const isFavorite = useRecipeStore((state) => state.favorites.includes(recipe.id));
const addFavorite = useRecipeStore((state) => state.addFavorite);
const removeFavorite = useRecipeStore((state) => state.removeFavorite);

<button
  onClick={() =>
    isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
  }
>
  {isFavorite ? '💔 Remove Favorite' : '❤️ Add to Favorites'}
</button>

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id.toString() === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
