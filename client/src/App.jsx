import { useState } from "react";
import "./App.css";
import { TableView } from "./layouts/tableView/TableView";
import { FormNewItem } from "./layouts/FormNewItem/FormNewItem";

function App() {
  const [items, setItems] = useState([
    { id: 1, fullName: "ФИО 10", telephone: "+7 915", notes: "Заметка 10" },
    { id: 2, fullName: "ФИО 11", telephone: "+7 915", notes: "Заметка 11" },
    { id: 3, fullName: "ФИО 1", telephone: "+7 915", notes: "Заметка 1" },
  ]);

  const appendContact = (fullName, telephone, notes) => {
    const itemsId = items.length + 1;

    const temp = {
      id: itemsId,
      fullName: fullName,
      telephone: telephone,
      notes: notes,
    };
    setItems([...items, temp]);
  };

  const removeContact = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>
        <div className="card-body">{<TableView data={items} removeContact={removeContact}/>}</div>
        <div>{<FormNewItem appendContact={appendContact} />}</div>
      </div>
    </div>
  );
}

export default App;
