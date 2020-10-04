import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="todo-app">
        <header className="todo-header">
          <h1>Todo</h1>

          <input type="text" name="new-item" />
        </header>

        <ul id="items">
          <li className="todo-item">
            <div className="todo-item-view">
              <input type="checkbox" className="todo-item-toggle" />
              <input
                className="todo-item-edit"
                value="Dip your toes in the JavaScript-water"
              />
              <label></label>
              <button className="todo-item-destroy">X</button>
            </div>
          </li>

          <li className="todo-item">
            <div className="todo-item-view">
              <input type="checkbox" className="todo-item-toggle" />

              <input
                className="todo-item-edit"
                value="Build an awesome todo-app"
              />
              <label></label>
              <button className="todo-item-destroy">X</button>
            </div>
          </li>
        </ul>

        <div>
          <div>2 items left</div>
          <div>
            <input type="radio" name="filter" /> All
            <input type="radio" name="filter" /> Active
            <input type="radio" name="filter" /> Completed
          </div>

          <div>
            <button>Clear completed</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
