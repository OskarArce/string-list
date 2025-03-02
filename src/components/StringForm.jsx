import { useContext, useState } from "react";
import { LayoutContext, ListContext } from "../Contexts";
import Button from "./Button";
import "./StringForm.css";

function StringForm() {
  const { setOpenForm } = useContext(LayoutContext);
  const { addItem } = useContext(ListContext);

  const [newValue, setNewValue] = useState("");

  const addValue = () => {
    addItem(newValue);
    setOpenForm(false);
  };

  const cancelValue = () => {
    setOpenForm(false);
  };

  return (
    <div className="string-form">
      <div className="header">
        <div className="subtitle">Add item to list</div>
      </div>
      <div className="content">
        <input
          type="text"
          placeholder="Type the text here..."
          value={newValue}
          onChange={(e) => setNewValue(e.target.value.trim())}
        />
      </div>
      <div className="actions">
        <Button label="Add" primary disabled={!newValue} onClick={addValue} />
        <Button label="Cancel" onClick={cancelValue} />
      </div>
    </div>
  );
}

export default StringForm;
