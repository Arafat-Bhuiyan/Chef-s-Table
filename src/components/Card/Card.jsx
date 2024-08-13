const Card = ({ recipeCard }) => {
    const { id, recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipeCard;

    return (
        <div>
            <div className="border border-slate-300 rounded-xl p-5 flex flex-col justify-start gap-5 w-[335px] h-full">
                <img src={recipe_image} className="rounded-xl w-full h-52" alt={`Cover picture of the title ${recipe_name}`} />
                <h1>{recipe_name}</h1>
                <p>{short_description}</p>

                <div className="border-t-2 border-slate-200"></div>
                <div>
                    <p>Ingredients: {ingredients.length}</p>
                    <ul className="list-disc px-8 pt-2">
                        {
                            ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <div className="border-b-2 border-slate-200"></div>

                <div className="flex gap-5">
                    <p>{preparing_time}</p>
                    <p>{calories}</p>
                </div>

                <button className='w-[9.5rem] bg-emerald-500 hover:bg-slate-50 rounded-full px-6 py-3 text-black font-semibold'>
                    Want to Cook
                </button>
            </div>
        </div>
    );
};

export default Card;