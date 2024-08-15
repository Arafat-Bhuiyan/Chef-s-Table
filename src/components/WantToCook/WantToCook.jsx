import CookItem from "../CookItem/CookItem";
import PreparingItem from "../PreparingItem/PreparingItem";
import "./WantToCook.css"
import PropTypes from "prop-types";

const WantToCook = ({ wantToCook, handlePrepare, preparing, totalPreparationTime, totalCalories }) => {

    return (
        <div>
            <div className="border-2 border-slate-200 w-[514px] max-h-full flex flex-col gap-5 rounded-xl">

                {/* Want to cook */}
                <div>
                    <div className="flex flex-col items-center pt-3">
                        <h1 className="text-2xl font-semibold p-2">Want to Cook: {wantToCook.length}</h1>
                        <div className="border-b-2 border-slate-300 w-[350px]"></div>
                    </div>
                    <table id="table-container">
                        {/* Table header */}
                        <tr className="font-medium text-base">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </table>

                    {
                        wantToCook.map((item, index) => 
                        <CookItem
                            key={index}
                            index={index}
                            item={item}
                            handlePrepare={handlePrepare}
                        ></CookItem>)
                    }
                </div>

                {/* Currently cooking */}
                <div>
                    <div className="flex flex-col items-center pt-3">
                        <h1 className="text-2xl font-semibold p-2">Currently cooking: {preparing.length}</h1>
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
                        </table>

                        {
                            preparing.map((item, idx) => 
                            <PreparingItem
                                key={idx}
                                idx={idx}
                                item={item}
                            ></PreparingItem>)
                        }

                    </div>
                </div>

                {/* Total time and calories */}
                <div className="pb-3 pl-2 text-base font-medium text-slate-600">
                    <h1>Total time: {totalPreparationTime} minutes</h1>
                    <h1>Total Calories: {totalCalories} calories</h1>
                </div>
            </div>

        </div>
    );
};

export default WantToCook;

WantToCook.propTypes = {
    wantToCook: PropTypes.array.isRequired,
    handlePrepare: PropTypes.func.isRequired,
    preparing: PropTypes.array.isRequired,
    totalPreparationTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired
}