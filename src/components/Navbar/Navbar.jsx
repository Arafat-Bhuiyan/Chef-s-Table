import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <header>
            <div className='flex justify-between items-center px-10 py-14 '>
                <div className='text-4xl font-bold'>
                    <NavLink to='/'>Recipe Calories</NavLink>
                </div>

                <nav>
                    <ul className="flex gap-10 text-base font-semibold text-gray-600">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/recipes'>Recipes</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/search'>Search</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-5">
                    <div className="relative inline-block">
                        <input type="text" placeholder="Search" className="text-base font-semibold border-0 bg-slate-100 placeholder-gray-600 rounded-full px-10 py-2" />
                        <span className="absolute top-[20%] left-[6%] text-gray-600"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    </div>
                    <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center" ><FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;