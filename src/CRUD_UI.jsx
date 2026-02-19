import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addItems, deleteItems, editItems } from "./CRUD_Slice";

const CRUD_UI = () => {

  const data = useSelector((state) => state.CRUDTask.list);
  const initValue = useSelector((state) => state.CRUDTask.init);
  const [edit, setEdit] = useState(null);
  const UD = useDispatch();

  const f = useFormik({
    initialValues: initValue,

    onSubmit: (values, { resetForm }) => {

      if (edit != null) {

        UD(editItems({ index: edit, newValues: values }));
        setEdit(null);
      } else {
        UD(addItems(values));
      }

      resetForm();
    },
  });

  const editData = (i, index) => {
    setEdit(index);
    f.setValues(i); // Fills the form with selected item's data
  };

  return (
    <div>
      <form onSubmit={f.handleSubmit}>
        <br />
        <br />
        Name:
        <input
          type="text"
          name="name"
          id=""
          value={f.values.name}
          onChange={f.handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <table border={1} cellSpacing={0} cellPadding={4}>
        <tr>
          <td>Name</td>
          <td>Action</td>
        </tr>
        {data.map((i, index) => (
          <tr>
            <td>{i.name}</td>
            <td>
              <button onClick={() => editData(i, index)}>Edit</button>
              <button onClick={() => UD(deleteItems(index))}>DELETE</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CRUD_UI;
