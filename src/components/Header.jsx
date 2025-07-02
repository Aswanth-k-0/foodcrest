import React, { useEffect, useState } from 'react';
import { ChevronDown, Utensils, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router';

function Header() {
    const navigate = useNavigate();

    const [cartCount, setCartCount] = useState(0);
    const [item, setitem] = useState(false);


    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(storedCart.length);

        const handleStorage = () => {
            const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartCount(updatedCart.length);
        };

        window.addEventListener('storage', handleStorage);

        return () => {
            window.removeEventListener('storage', handleStorage);
        };
    }, []);

    const goToCart = () => {
        navigate('/cart');
    };
    const gotoHome = () => {
        navigate('/');
    }
    const showblock = () => {
        item ? setitem(false) : setitem(true);
    }

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                <div className="flex items-center space-x-2 cursor-pointer" onClick={gotoHome}>
                    <Utensils />
                    <span className="text-lg font-semibold">FoodCrest</span>
                </div>

                <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800">
                    <a href="/" className="hover:text-black">Home</a>

                    <div className="relative group">
                        <button className="hover:text-black flex items-center">
                            Dishes
                            <ChevronDown className="ml-1 w-4 h-4" onClick={showblock} />
                        </button>{
                            item ? <div className="absolute z-10 mt-2 w-32 bg-white border border-gray-100 rounded shadow-md">
                                <a href="#Spicy" className="block px-4 py-2 hover:bg-gray-100">Spicy</a>
                                <a href="#Tasty" className="block px-4 py-2 hover:bg-gray-100">Tasty</a>
                                <a href="#Delicious" className="block px-4 py-2 hover:bg-gray-100">Delicious</a>
                                <a href="#Crispy" className="block px-4 py-2 hover:bg-gray-100">Crispy</a>
                            </div> : <div className='hidden'></div>
                        }

                    </div>

                    <a href="#about" className="hover:text-black">About</a>
                    <a href="#ourdish" className="hover:text-black">Menu</a>
                    <a href="#reviews" className="hover:text-black">Reviews</a>

                    <button className="relative cursor-pointer" onClick={goToCart}>
                        <ShoppingCart className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <a href="#" className="ml-4 px-4 py-1 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50">
                        Login
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
