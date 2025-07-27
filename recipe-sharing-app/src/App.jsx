// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

const App = () => (
  <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
    <h1><Link to="/">🍲 Recipe Sharing</Link></h1>
    <SearchBar />
    <Routes>
      <Route path="/" element={
        <>
          <AddRecipeForm />
          <RecipeList />
        </>
      } />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  </div>
);

export default App;
