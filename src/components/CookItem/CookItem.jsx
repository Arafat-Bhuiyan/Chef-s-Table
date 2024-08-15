import "./CookItem.css"

const CookItem = ({item, index, handlePrepare}) => {
    const { recipe_name, preparing_time, calories} = item;

    return (
        <div>
            <div>
                <table id="table-container">
                    {/* Table data */}
                    <tr >
                        <td>{index+1}</td>
                        <td>{recipe_name}</td>
                        <td>{preparing_time} min</td>
                        <td>{calories} calories</td>
                        <td>
                            <button onClick={() => handlePrepare(index)} className="bg-emerald-500 hover:bg-slate-900 hover:text-white rounded-full px-3 py-2 text-sm text-black font-semibold">Preparing</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default CookItem;