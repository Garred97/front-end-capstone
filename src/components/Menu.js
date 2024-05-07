import React from "react";
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';

const Menu = () => {

    const recipes = [
        {
            id: 1,
            title: 'Greek Salad',
            price: 12.99,
            image: greekSalad,
            description: `The famous greek salad of crispy lettuce, peppers, olives and our chicago style fota cheese,
                        garnished with crunchy garlic and rosemary croutons`,
        },
        {
            id: 2,
            title: 'Bruchetta',
            price: 5.99,
            image: bruchetta,
            description: `Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt
                        and olive oil.`,
        },
        {
            id: 3,
            title: 'Lemon Dessert',
            price: 4.78,
            image: lemonDessert,
            description: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as
                        authentic as can be imagined.`,
        }
    ];

    return (
        <section className="menu-container">
            <section className="menu-header">
                <h2>This week's specials!</h2>
                <button>Order Menu</button>
            </section>

            <section className="cards">
                {recipes.map(recipe => <section key={recipe.id} className="menu-items">
                    <img src={recipe.image} alt="card-food" />
                    <section className="menu-content">
                        <section className="heading">
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                        </section>
                        <p>{recipe.description}</p>
                        <button className="orderBtn">Order Now</button>
                    </section>
                </section>)}
            </section>
        </section>
    )
}

export default Menu;