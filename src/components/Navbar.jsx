import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-100">
            <nav className="flex w-full justify-between items-center">
                <div className="logo font-bold text-xl">MealBrain</div>
                <div className="nav-links flex gap-4">
                    <Link to="/ask-ai" className="text-blue-500 hover:underline">
                        Ask some foods to AI
                    </Link>
                    <Link to="/about" className="text-blue-500 hover:underline">
                        Why MealBrain
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;