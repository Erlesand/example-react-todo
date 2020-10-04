import React from 'react';
import './App.css';
function App() {
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
          <li className="todo-item">
            <div className="todo-item-view">
              <input type="checkbox" className="todo-item-toggle" />
              <label>Dip your toes in the JavaScript-water</label>
              <button className="todo-item-destroy">×</button>
            </div>

            <div className="todo-item-edit">
              <input
                className="todo-item-edit"
                value="Dip your toes in the JavaScript-water"
              />
            </div>
          </li>

          <li className="todo-item">
            <div className="todo-item-view">
              <input type="checkbox" className="todo-item-toggle" />
              <label>Build an awesome todo-app!</label>
              <button className="todo-item-destroy">×</button>
            </div>

            <div className="todo-item-edit">
              <input
                className="todo-item-edit"
                value="Build an awesome todo-app!"
              />
            </div>
          </li>
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
}

export default App;
