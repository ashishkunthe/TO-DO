import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function submit(item) {
    setItems((items) => [...items, item]);
  }
  function remove(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div>
      <Header />
      <Form submit={submit} />
      <List items={items} remove={remove} />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 className="heade-line">THIS IS THE TODO LIST</h1>
    </div>
  );
}

function Form({ submit }) {
  const [description, setDescription] = useState("");
  function sub(e) {
    e.preventDefault();
    const newitem = { description, id: Date.now() };
    submit(newitem);
    setDescription("");
  }
  return (
    <form onSubmit={sub} className="form">
      <input
        type="text"
        className="bar"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button className="button">Add</button>
    </form>
  );
}

function List({ items, remove }) {
  return (
    <div className="background">
      <ol className="list">
        {items.map((item) => (
          <li key={item.id} className="Items">
            {item.description}

            <button className="delete" onClick={() => remove(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
