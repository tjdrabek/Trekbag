import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
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

    onAddItem(itemText);
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
