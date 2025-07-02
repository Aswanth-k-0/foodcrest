import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    const withQuantity = stored.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCart(withQuantity);
  }, []);

  const updateLocalStorage = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const handleIncrease = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
    updateLocalStorage(updated);
  };

  const handleDecrease = (id) => {
    const updated = cart
      .map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item);
    setCart(updated);
    updateLocalStorage(updated);
  };

  const handleRemove = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    updateLocalStorage(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
              />
            ))}
          </div>

          <div className="text-right mt-6">
            <h3 className="text-xl font-semibold">Total: ${total}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
