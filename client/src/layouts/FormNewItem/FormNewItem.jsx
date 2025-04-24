import { useState } from "react";
import s from "./FormNewItem.module.scss";

export const FormNewItem = ({ appendContact }) => {
  const [fullName, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [notes, setNotes] = useState("");

  const submit = () => {
    if (fullName.trim() === "" || telephone.trim() === "") return;

    appendContact(fullName, telephone, notes);
    setFullName("");
    setTelephone("");
    setNotes("");
  };

  return (
    <div className="mt-3 p-3">
      <form className="table">
        <tr className={`${s.div} gap-3`} >
          <th className="mb-3">
            <label className="form-label">ФИО</label>
            <input
              className="form-control"
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </th>
          <th className="mb-3">
            <label className="form-label">Телефон</label>
            <input
              className="form-control"
              type="text"
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
            />
          </th>
          <th className="mb-3">
            <label className="form-label">Заметки</label>
            <textarea
              className="form-control"
              cols={70}
              rows={3}
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            />
          </th>
        </tr>
        <button type="button" className="btn btn-primary" onClick={submit}>
          Новый контакт
        </button>
      </form>
    </div>
  );
};
