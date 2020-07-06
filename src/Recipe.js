import React, { useEffect, useState, Component } from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, url }) => {

    const gotoSite = () => {
        window.open(url, "_blank");
    };

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories {Math.ceil(calories)}</p>
            <img className={style.image} src={image} alt="" />
            <p>Ingredients</p>
            <ul className={style.ingredients}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <button className={style.gotobutton} onClick={gotoSite}>Go to</button>
        </div>
    );
}

export default Recipe;
