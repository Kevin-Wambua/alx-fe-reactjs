// src/components/RecommendationsList.jsx
import { useEffect } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h2>🍽️ Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available yet.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: 10 }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
