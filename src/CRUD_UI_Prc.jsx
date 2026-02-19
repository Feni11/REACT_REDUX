import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, deleteItems, editItems } from "./CRUD_Slice_Prac";

const CRUD_UI_Prc = () => {
  const data = useSelector((state) => state.CRUD_Practice.list);
  const initValue = useSelector((state) => state.CRUD_Practice.init);
  const UD = useDispatch();
  const [edit, setEdit] = useState(null);
  const fileRef = useRef(null)

  const f = useFormik({
    initialValues: { initValue, image: "" },

    onSubmit: (values, { resetForm }) => {
      const formatevalue = {
        name: values.name,
        contactNo: Number(values.contactNo),
        image: values.image,
      };

      if (edit != null) {
        UD(editItems({ index: edit, newValues: formatevalue }));
        setEdit(null);
      } else {
        UD(addItems(formatevalue));
      }
      resetForm(({values: initValue}));
      fileRef.current.value = "";
    },
  });

  const editData = (i, index) => {
    setEdit(index);
    f.setValues({
      name: i.name,
      contactNo: i.contactNo,
      image: i.image,
    });
  };

  return (
    <div>
      <form action="" onSubmit={f.handleSubmit}>
        <br />
        <br />
        Name:{" "}
        <input
       
          type="text"
          name="name"
          value={f.values.name}
          onChange={f.handleChange}
        />
        <br />
        <br />
        Contact No:{" "}
        <input
      
          type="number"
          name="contactNo"
          value={f.values.contactNo}
          onChange={f.handleChange}
        />
        <br />
        <br />
        Image:{" "}
        <input
         ref={fileRef}
          type="file"
          name="image"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                f.setFieldValue("image", reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <table border={1} cellPadding={3} cellSpacing={0}>
        <tr>
          <td>Name</td>
          <td>Contact No</td>
          <td>Image</td>
          <td>Action</td>
        </tr>
        {data.map((i, index) => (
          <tr>
            <td>{i.name}</td>
            <td>{i.contactNo}</td>
            <td>
              <img
                src={i.image}
                alt="preview"
                style={{ width: "100%", height: "100px" }}
              />
            </td>
            <td>
              <button onClick={() => editData(i, index)}>UPDATE</button>
              <button onClick={() => UD(deleteItems(index))}>DELETE</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CRUD_UI_Prc;
