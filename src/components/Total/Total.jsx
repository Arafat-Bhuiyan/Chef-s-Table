import { useEffect, useState } from "react";

const Total = ({ item }) => {
    const { preparing_time } = item

    return (
        <div>
            <div className="pb-3 pl-2 text-sm text-gray-700 font-semibold">
                <h1>Total time: { } minutes</h1>
                <h1>Total Calories: { } calories</h1>
            </div>
        </div>
    );
};

export default Total;