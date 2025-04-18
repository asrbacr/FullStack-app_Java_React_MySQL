import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TableView } from "./layouts/tableView/TableView";
import { FormNewItem } from "./layouts/FormNewItem/FormNewItem";

function App() {
  
  const [items, setItems] = useState([
    { id: 1, fullName: "ФИО 10", telephone: "+7 915", notes: "Заметка 10" },
    { id: 2, fullName: "ФИО 11", telephone: "+7 915", notes: "Заметка 11" },
    { id: 3, fullName: "ФИО 1", telephone: "+7 915", notes: "Заметка 1" },
  ]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/contacts").then((res) => {
      const data = [];
      res.data._embedded.contacts.forEach((item) => {
        data.push({
          id: item.id,
          fullName: item.fullName,
          telephone: item.telephone,
          notes: item.notes,
        });
      });
      setItems(data);
    });
  }, []);

  const appendContact = (fullName, telephone, notes) => {
 
    const temp = {
      // id: currentId,
      fullName: fullName,
      telephone: telephone,
      notes: notes,
    };

    const url = `http://localhost:9000/api/contacts`;
    axios.post(url, temp)
      .then(e => {
        temp.id = e.data.id;
        setItems([...items, temp]);
      });
  };

  const removeContact = (id) => {
    const url = `http://localhost:9000/api/contacts/${id}`;
    axios.delete(url);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>
        <div className="card-body">
          {<TableView data={items} removeContact={removeContact} />}
        </div>
        <div>{<FormNewItem appendContact={appendContact} />}</div>
      </div>
    </div>
  );
}

export default App;
