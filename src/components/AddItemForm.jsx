import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    // basic validation
    if (!itemText) {
      alert("Item can't be empty");
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
      />
      <Button>Add to list</Button>
    </form>
  );
}
