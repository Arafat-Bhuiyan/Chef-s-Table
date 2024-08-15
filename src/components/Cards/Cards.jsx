import { useEffect, useState } from "react";
import Card from "../Card/Card";
import WantToCook from "../WantToCook/WantToCook";

const Cards = () => {
    const [recipeCards, setRecipeCards] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [preparing, setPreparing] = useState([]);

    useEffect(() => {
        fetch('recipe_card.json')
            .then(res => res.json())
            .then(data => setRecipeCards(data))
    }, [])

    // #region handleCook 
    const handleCook = (recipeCard) => {
        // Check if the recipe is already in wantToCook
        const isAlreadyAdded = wantToCook.some(item => item.id === recipeCard.id);

        if (!isAlreadyAdded) {
            const newWantToCook = [...wantToCook, recipeCard];
            setWantToCook(newWantToCook);
        }
    }

    // #region handlePrepare
    const handlePrepare = (prepareItem) => {
        // Remove the item from wantToCook
        const remaining = wantToCook.filter((cookItem) => cookItem.id !== prepareItem.id);
        setWantToCook(remaining);
        // Add to preparing
        const newPreparing = [...preparing, prepareItem];
        setPreparing(newPreparing);
    }

    // #region Total Time
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
                            recipeCards.map(recipeCard => 
                            <Card
                                key={recipeCard.id}
                                recipeCard={recipeCard}
                                handleCook={handleCook}
                            />)
                        }
                    </div>

                    <WantToCook 
                        wantToCook={wantToCook} 
                        handlePrepare={handlePrepare} 
                        preparing={preparing} 
                        totalPreparationTime={totalPreparationTime} 
                        totalCalories={totalCalories} 
                    />

                </div>
            </div>
        </div>
    );
};

export default Cards;