import { useState } from "react";
import { LayoutContext, ListContext } from "./Contexts";
import StringList from "./components/StringList";
import StringForm from "./components/StringForm";
import "./App.css";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [list, setList] = useState([]);
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState([]);

  const addItem = (text) => {
    if (!text) return;
    setHistory([...history, list]);
    setList([...list, text]);
  };

  const deleteItem = (indexes) => {
    const deleteIndexes = indexes ?? selected;
    setHistory([...history, list]);
    setList(list.filter((_element, index) => !deleteIndexes.includes(index)));
    setSelected(selected.filter((index) => !deleteIndexes.includes(index)));
  };

  const selectItem = (index) => {
    if (list.length < index) return;
    const selectedIndex = selected.indexOf(index);
    if (selectedIndex === -1) setSelected([...selected, index]);
    else setSelected(selected.toSpliced(selectedIndex, 1));
  };

  const undo = () => {
    if (history.length > 0) setList(history.pop());
  };

  return (
    <LayoutContext.Provider value={{ openForm, setOpenForm }}>
      <ListContext.Provider
        value={{
          list,
          history,
          selected,
          addItem,
          deleteItem,
          selectItem,
          undo,
        }}
      >
        {openForm ? <StringForm /> : <StringList />}
      </ListContext.Provider>
    </LayoutContext.Provider>
  );
}

export default App;
