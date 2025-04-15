export const TableRowItem = ({ id, fullName, telephone, notes }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{fullName}</td>
      <td>{telephone}</td>
      <td>{notes}</td>
    </tr>
  );
};
