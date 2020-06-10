import React, { useState } from 'react';
import Item from '../classes/item';

const TodoAdd = ({ items, setItems }) => {
    const [item, setNewItem] = useState('');

    const onChange = (e) => {
      const { value } = e.target;
      setNewItem(value);
    };

    const onAdd = () => {
      const newItem = new Item(item);
      const newItems = [ ...items, newItem ];

      setItems(newItems);

      // Clear input
      setNewItem('');
    };

    return (
        <>
            <input className="todo__item-input" onChange={onChange} value={item} />
            <button className="todo__item-button" onClick={onAdd}>Add Todo</button>
        </>
    );
}

export default TodoAdd;
