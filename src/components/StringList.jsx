import { useContext } from "react";
import { LayoutContext, ListContext } from "../Contexts";
import StringListItem from "./StringListItem";
import Button from "./Button";
import "./StringList.css";

function StringList() {
  const { setOpenForm } = useContext(LayoutContext);
  const { list, history, selected, deleteItem, undo } = useContext(ListContext);

  return (
    <div className="string-list">
      <div className="header">
        <div className="title">This is a technical proof</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
          inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
          hendrerit posuere augue fames dictumst placerat porttitor, dis mi
          pharetra vestibulum venenatis phasellus.
        </div>
      </div>
      <div className="content">
        {list.map((element, index) => (
          <StringListItem key={index} label={element} index={index} />
        ))}
      </div>
      <div className="actions">
        <div className="secondary-actions">
          <Button
            label="Undo"
            disabled={history.length === 0}
            onClick={() => undo()}
          />
          <Button
            label="Delete"
            disabled={selected.length === 0}
            onClick={() => deleteItem()}
          />
        </div>
        <div className="main-actions">
          <Button label="Add" primary onClick={() => setOpenForm(true)} />
        </div>
      </div>
    </div>
  );
}

export default StringList;
