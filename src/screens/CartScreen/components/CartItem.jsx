import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="w-20 h-20 rounded object-cover" />
        <div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm text-gray-600">${item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => onDecrease(item.id)} className="px-2 py-1 border rounded">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)} className="px-2 py-1 border rounded">+</button>
        <button onClick={() => onRemove(item.id)} className="ml-4 text-red-500 hover:underline">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
