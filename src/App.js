import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "6f14ab65";
  const APP_KEY = "965a4cd1bcf1735dd11f70d59e1aa7c6";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chickpeas');

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  const renderMain = () => {
    if (query === '') {
      return (
        // return gif 
        <div>
          <img src="./eggplant.jpg" />
        </div>);
    } else {
      return (
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              // key={recipe.recipe.label} we need a unique key (like id) but there isn't any
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="App">
      <div className="header-message message">
        <h1>LET'S COOK!</h1>
      </div>
      <div className="hint-message message">
        <p><i>What do we have?</i></p>
      </div>
      <div className="search-div">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit"><b>Search</b></button>
        </form>
      </div>
      {renderMain()}
    </div>
  );
}

export default App;
