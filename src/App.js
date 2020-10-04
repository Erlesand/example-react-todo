import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [remaining, setRemaining] = useState(0);
  const [filter, setFilter] = useState('all');
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
  const textInput = useRef();

  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    switch (filter) {
      case 'active':
        setFiltered(items.filter((item) => !item.done));
        break;

      case 'completed':
        setFiltered(items.filter((item) => item.done));
        break;

      default:
        setFiltered(items);
        break;
    }
  }, [filter, items]);

  const toggle = (item) => {
    console.log('toggle', item);
    const _items = items.map((_item) => {
      if (item.id === _item.id) {
        _item.done = !_item.done;
      }

      return _item;
    });

    setItems(_items);
  };

  const add = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    if (textInput.current.value.trim() === '') {
      return;
    }

    const item = {
      id: Date.now(),
      value: textInput.current.value,
      done: false,
      edit: false,
    };

    setItems([...items, item]);

    textInput.current.value = '';
  };

  const purge = () => {
    console.log('purge');
    setItems(items.filter((item) => !item.done));
  };

  const remove = (_item) => {
    setItems(items.filter((item) => item.id !== _item.id));
  };

  useEffect(() => {
    setRemaining(items.filter((item) => !item.done).length);
  }, [items]);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="todo-header">
        <h1>Todo</h1>
      </div>

      <section className="todo-app">
        <input
          type="text"
          ref={textInput}
          className="todo-app-add"
          placeholder="What shall we do today?"
          onKeyPress={add}
        />

        <ul id="items">
          {filtered.map((item) => (
            <li className="todo-item">
              <div className="todo-item-view">
                <input
                  id={`item-${item.id}`}
                  type="checkbox"
                  className="todo-item-toggle"
                  checked={item.done}
                  onChange={() => toggle(item)}
                />
                <label htmlFor={`item-${item.id}`}>{item.value}</label>
                <button
                  className="todo-item-destroy"
                  onClick={() => remove(item)}
                >
                  ×
                </button>
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
          <div>{remaining} items left</div>
          <div className="todo-list-filters">
            <input
              id="filter-all"
              type="radio"
              name="filter"
              checked={filter === 'all'}
              onClick={() => setFilter('all')}
            />
            <label htmlFor="filter-all">All</label>
            <input
              id="filter-active"
              type="radio"
              name="filter"
              onClick={() => setFilter('active')}
            />
            <label htmlFor="filter-active">Active</label>

            <input
              id="filter-completed"
              type="radio"
              name="filter"
              onClick={() => setFilter('completed')}
            />
            <label htmlFor="filter-completed">Completed</label>
          </div>

          <div>
            <button className="todo-list-clear" onClick={() => purge()}>
              Clear completed
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
