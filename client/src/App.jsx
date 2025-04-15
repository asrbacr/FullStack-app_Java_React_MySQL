import "./App.css";
import { TableView } from "./layouts/tableView/TableView";

function App() {

  const items = [
    { id: 10, fullName: "ФИО 10", telephone: "+7 915", notes: "Заметка 10" },
    { id: 11, fullName: "ФИО 11", telephone: "+7 915", notes: "Заметка 11" },
    { id: 1, fullName: "ФИО 1", telephone: "+7 915", notes: "Заметка 1" },
    { id: 15, fullName: "ФИО 15", telephone: "+7 915", notes: "Заметка 15" },
  ];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>
        <div className="card-body">{<TableView data={items}/>}</div>
      </div>
    </div>
  );
}

export default App;
