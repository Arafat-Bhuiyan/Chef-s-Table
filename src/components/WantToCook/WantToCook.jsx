import "./WantToCook.css"

const WantToCook = () => {
    return (
        <div>
            <div className="border-2 border-slate-200 w-[514px] max-h-full flex flex-col gap-5 rounded-xl">
                {/* Want to cook */}
                <div>
                    <div className="flex flex-col items-center pt-3">
                        <h1 className="text-2xl font-semibold p-2">Want to Cook: 01</h1>
                        <div className="border-b-2 border-slate-300 w-[350px]"></div>
                    </div>
                    <div>
                        <table id="table-container">
                            {/* Table header */}
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>

                            {/* Table data */}
                            <tr >
                                <td>1</td>
                                <td>Chicken Caesar Salad</td>
                                <td>10 min</td>
                                <td>100 cal</td>
                                <td>
                                    <button className="bg-emerald-500 hover:bg-slate-900 hover:text-white rounded-full px-3 py-2 text-sm text-black font-semibold">Preparing</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                {/* Currently cooking */}
                <div>
                    <div className="flex flex-col items-center pt-3">
                        <h1 className="text-2xl font-semibold p-2">Currently cooking: 01</h1>
                        <div className="border-b-2 border-slate-300 w-[350px]"></div>
                    </div>
                    <div>
                        <table id="table-container">
                            {/* Table header */}
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>

                            {/* Table data */}
                            <tr >
                                <td>1</td>
                                <td>Chicken Caesar Salad</td>
                                <td>10 min</td>
                                <td>100 cal</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>

                {/* Total time and calories */}
                <div className="pb-3 pl-2 text-sm text-gray-700 font-semibold">
                    <h1>Total time: 45 minutes</h1>
                    <h1>Total Calories: 1050 calories</h1>
                </div>
            </div>

        </div>
    );
};

export default WantToCook;