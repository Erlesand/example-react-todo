import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      value: 'Dip your toes in the JavaScript-water',
      done: true,
      edit: false,
    },
    {
      id: 2,
      value: 'Build an awesome todo-app!',
      done: false,
      edit: false,
    },
    {
      id: 3,
      value: 'Find a cure for Corona',
      done: false,
      edit: false,
    },
  ]);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="todo-header">
        <h1>Todo</h1>
      </div>

      <section className="todo-app">
        <input
          type="text"
          className="todo-app-add"
          placeholder="What shall we do today?"
        />

        <ul id="items">
          {items.map((item) => (
            <li className="todo-item">
              <div className="todo-item-view">
                <input
                  type="checkbox"
                  className="todo-item-toggle"
                  checked={item.done}
                />
                <label>{item.value}</label>
                <button className="todo-item-destroy">×</button>
              </div>

              {item.edit ? (
                <div className="todo-item-edit">
                  <input className="todo-item-edit" value={item.value} />
                </div>
              ) : (
                ''
              )}
            </li>
          ))}
        </ul>

        <div className="todo-list-summary">
          <div>2 items left</div>
          <div className="todo-list-filters">
            <input type="radio" name="filter" /> All
            <input type="radio" name="filter" /> Active
            <input type="radio" name="filter" /> Completed
          </div>

          <div>
            <button className="todo-list-clear">Clear completed</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
