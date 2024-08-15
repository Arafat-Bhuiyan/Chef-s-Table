import "./PreparingItem.css"

const PreparingItem = ({ item, idx }) => {
    const { recipe_name, preparing_time, calories } = item;

    return (
        <div>
            <div>
                <table id="table-container">
                    {/* Table data */}
                    <tr className="text-base font-normal text-slate-600">
                        <td>{idx + 1}</td>
                        <td>{recipe_name}</td>
                        <td>{preparing_time} min</td>
                        <td>{calories} calories</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default PreparingItem;