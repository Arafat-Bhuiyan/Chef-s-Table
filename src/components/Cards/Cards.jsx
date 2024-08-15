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

    const [wantToCook, setWantToCook] = useState([]);
    const handleCook = (recipeCard) => {  
        // Check if the recipe is already in wantToCook
    const isAlreadyAdded = wantToCook.some(item => item.id === recipeCard.id);
    
    if (!isAlreadyAdded) {
        const newWantToCook = [...wantToCook, recipeCard];
        setWantToCook(newWantToCook);
    }
    }

    const [preparing, setPreparing] = useState([]);

    const handlePrepare = (index) => {
        const itemToMove = wantToCook[index];
        // Remove the item from wantToCook
        const remaining = wantToCook.filter((_, i) => i !== index);
        setWantToCook(remaining);
        // add the item to preparing
        const newPreparing = [...preparing, itemToMove];
        setPreparing(newPreparing);
    };

     // Calculate total preparation time and calories
     const totalPreparationTime = preparing.reduce((total, recipe) => total + recipe.preparing_time, 0);
     const totalCalories = preparing.reduce((total, recipe) => total + recipe.calories, 0);


    return (
        <div>
            <div className="flex flex-col items-center text-center mt-20">
                <h1 className="text-4xl font-semibold mb-5">Our Recipes</h1>
                <h4 className="text-sm  w-2/3 font-normal text-gray-500 mb-5">Our team is made up of skilled recipe developers, experienced food writers, and thorough product testers, all working together to create reliable and delicious recipes. We also collaborate with talented photographers and creatives to bring our dishes to life through beautiful visuals.</h4>
            </div>

            <div>
                <div className="flex flex-row justify-between pb-20 pt-10">

                    <div className="grid grid-cols-2 gap-2">
                        {
                            recipeCards.map(recipeCard => <Card
                                key={recipeCard.id}
                                recipeCard={recipeCard}
                                handleCook={handleCook}
                            ></Card>)
                        }
                    </div>

                    <WantToCook wantToCook={wantToCook} handlePrepare={handlePrepare} preparing={preparing} totalPreparationTime={totalPreparationTime} totalCalories={totalCalories} ></WantToCook>

                </div>
            </div>
        </div>
    );
};

export default Cards;