import { useEffect, useState } from "react";
import Card from "../Card/Card";
import WantToCook from "../WantToCook/WantToCook";

const Cards = () => {
    const [recipeCards, setRecipeCards] = useState([]);

    useEffect(() => {
        fetch('recipe_card.json')
            .then(res => res.json())
            .then(data => setRecipeCards(data))
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center text-center mt-20">
                <h1 className="text-4xl font-bold mb-5">Our Recipes</h1>
                <h4 className="text-sm  w-2/3 font-normal text-gray-500 mb-5">Our team is made up of skilled recipe developers, experienced food writers, and thorough product testers, all working together to create reliable and delicious recipes. We also collaborate with talented photographers and creatives to bring our dishes to life through beautiful visuals.</h4>
            </div>

            <div>
                <div className="flex flex-row justify-between pb-20 pt-10">
                    
                    <div className="grid grid-cols-2 gap-2">
                    {
                        recipeCards.map(recipeCard => <Card
                            key={recipeCard.id}
                            recipeCard={recipeCard}
                        ></Card>)
                    }
                    </div>
                    <WantToCook></WantToCook>
                    
                </div>
            </div>
        </div>
    );
};

export default Cards;