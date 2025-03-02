import { useContext } from "react";
import { ListContext } from "../Contexts";
import "./StringListItem.css";

function StringListItem({ label, index }) {
  const { selected, selectItem } = useContext(ListContext);

  return (
    <div
      onClick={() => selectItem(index)}
      className={`string-list-item ${
        selected.includes(index) ? "selected" : ""
      }`}
    >
      {label}
    </div>
  );
}

export default StringListItem;
