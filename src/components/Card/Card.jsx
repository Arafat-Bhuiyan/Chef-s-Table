import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faClock } from "@fortawesome/free-solid-svg-icons";

const Card = ({ recipeCard, handleCook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipeCard;

    return (
        <div>
            <div className="border border-slate-300 rounded-xl p-5 flex flex-col justify-start gap-5 w-[335px] h-full">
                <img src={recipe_image} className="rounded-xl w-full h-52" alt={`Cover picture of the title ${recipe_name}`} />
                <h1 className="font-semibold text-xl">{recipe_name}</h1>
                <p className="font-normal text-base text-slate-500">{short_description}</p>

                <div className="border-t-2 border-slate-200"></div>
                <div>
                    <p className="font-medium text-lg">Ingredients: {ingredients.length}</p>
                    <ul className="list-disc px-8 pt-2 font-normal text-base text-slate-500">
                        {
                            ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <div className="border-b-2 border-slate-200"></div>

                <div className="flex gap-5 text-sm font-normal text-slate-700">
                    <p><FontAwesomeIcon icon={faClock} /> {preparing_time} min</p>
                    <p><FontAwesomeIcon icon={faFire}/> {calories} calories</p>
                </div>

                <button onClick={() => handleCook(recipeCard)} className='w-[9.5rem] bg-emerald-500 hover:bg-slate-900 hover:text-white rounded-full px-6 py-3 text-black font-semibold'>
                    Want to Cook
                </button>
            </div>
        </div>
    );
};

export default Card;