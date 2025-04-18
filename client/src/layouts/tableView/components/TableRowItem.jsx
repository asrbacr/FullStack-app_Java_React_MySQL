export const TableRowItem = ({ id, fullName, telephone, notes, remove, index }) => {
  return (
    <tr>
      {/* <th scope="row">{id}</th> */}
      <th scope="row">{index}</th>
      <td>{fullName}</td>
      <td>{telephone}</td>
      <td>{notes}</td>
      <td
        className="btn p-2 ms-4"
        onClick={() => {
          remove(id);
        }}
      >
        X
      </td>
    </tr>
  );
};
