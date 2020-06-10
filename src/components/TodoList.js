import React from 'react';

const TodoList = ({ items, onItemClick }) => {
    const filteredItems = items.map(item => {
        return (
            <>
                <li 
                    className={`todo__item ${item.done && 'done'}`} 
                    key={item.id} 
                    onClick={onItemClick(item)}
                >
                    {item.text}
                    {item.done && ' - Done'}
                </li>
            </>
        )
    })

    return (
        <div className="todo__list">
            { filteredItems }
        </div>
    );
}

export default TodoList;
