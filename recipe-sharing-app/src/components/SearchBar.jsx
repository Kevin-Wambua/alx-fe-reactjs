// src/components/SearchBar.jsx
import { useRecipeStore } from '../stores/recipeStore';
import { useEffect } from 'react';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm}
      style={{ width: '100%', padding: 10, marginBottom: 20 }}
    />
  );
};

export default SearchBar;
