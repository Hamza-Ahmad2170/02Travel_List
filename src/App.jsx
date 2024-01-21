import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItem) => {
    setItems((prevItem) => [...prevItem, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    confirm("Are you sure you want to delete all items") ? setItems([]) : null
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
