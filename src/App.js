import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import './index.css';
import Button from './components/Button';

const App = () => {
  const [items, setItems] = useState([]);

  const onItemClick = (item) => (e) => {
    const filteredItems = [...items];
    const selectedItem = items.findIndex(selectedItem => selectedItem.id === item.id);

    if (filteredItems[selectedItem].done === false) {
      filteredItems[selectedItem].done = true;
    };

    setItems(filteredItems);
  };

  return (
    <div className="App">
      <div>
        {/* Question 1 */}
        <h3>Question 1</h3>
        <TodoAdd items={items} setItems={setItems}/>
        <TodoList items={items} onItemClick={onItemClick} />

        <h3>Question 2</h3>
        <Button type="default" />
        <Button type="active" />
        <Button type="disabled" />
      </div>
      
    </div>
  );
}

export default App;
