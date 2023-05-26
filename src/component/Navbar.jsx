import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useAuth } from '../provider/AuthProvider';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const {user, logOut} = useAuth()

    return (
        <nav className="bg-white">
            <div className="ui-container flex justify-between items-center py-4">
                <Link to="/"><h2 className="text-3xl font-bold">Feans<span className="text-[#d77002]">Chef</span></h2></Link>

                <span className="md:hidden">
                    {
                        toggle ? <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2 onClick={() => setToggle(!toggle)} />
                    }
                </span>

                <ul className={`flex items-center duration-200 z-50 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black top-16 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-5 absolute md:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink>
                    </li>
                    
                    <li>{
                            user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full" src={user?.photoURL} title={user.displayName} alt="" /> : ""
                        }
                    </li>
                    <li>{
                            user ? <button onClick={logOut} className="bg-[#d77002] px-4 py-2  text-white">LogOut</button> : <button className="bg-[#d77002] px-4 py-2 rounded text-white"><Link to="/login">Login</Link></button>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;