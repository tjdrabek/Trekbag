import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Itemlist from "./Itemlist";
import Sidebar from "./Sidebar";
import "../index.css";
import { useEffect, useState } from "react";
import { initialItems } from "../lib/constants";
import Logo from "./Logo";
import Counter from "./Counter";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function App() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  useEffect(() => {
    console.log("setting local storage");
    localStorage.setItem("items", JSON.stringify(items));
  });

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header>
          <Logo />
          <Counter
            numberOfItemsPacked={items.filter((item) => item.packed).length}
            totalNumberOfItems={items.length}
          />
        </Header>
        <Itemlist
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar>
          <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup
            handleRemoveAllItems={handleRemoveAllItems}
            handleResetToInitial={handleResetToInitial}
            handleMarkAllAsComplete={handleMarkAllAsComplete}
            handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          />
        </Sidebar>
      </main>
      <Footer />
    </>
  );
}

export default App;
