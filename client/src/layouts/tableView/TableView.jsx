import { TableRowItem } from "./components/TableRowItem";

export const TableView = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">ФИО</th>
          <th scope="col">Телефон</th>
          <th scope="col">Заметки</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => (
          <TableRowItem key={item.id}
            id={item.id}
            fullName={item.fullName}
            telephone={item.telephone}
            notes={item.notes}
            remove={props.removeContact}
            index = {index + 1}
          />
        ))}
      </tbody>
    </table>
  );
};
