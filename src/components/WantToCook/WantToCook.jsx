const WantToCook = () => {
    return (
        <div>
            <div className="border-2 border-slate-200 w-[514px] h-[685px] flex flex-col gap-5 rounded-xl">
                {/* Want to cook */}
                <div>
                    <div className="flex flex-col items-center pt-3">
                        <h1 className="text-2xl font-semibold p-2">Want to Cook: </h1>
                        <div className="border-b-2  border-slate-200"></div>
                    </div>
                    <div>
                        <table className="table-auto ml-4 mt-5">
                            <thead>
                                <tr>
                                    <th className="pr-[30px]"></th>
                                    <th className="pr-[130px]">Name</th>
                                    <th className="pr-[28px]">Time</th>
                                    <th className="pr-[28px]">Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <h1>1</h1>
                                    <td>Chicken Caesar Salad</td>
                                    <td>10 min</td>
                                    <td>100 cal</td>
                                    <button className="bg-emerald-500 hover:bg-slate-50 rounded-full px-3 py-2 text-sm text-black font-semibold">Preparing</button>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Currently cooking */}
            </div>

        </div>
    );
};

export default WantToCook;