import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note , updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
          </div>
            <p className="card-text">{note.description}</p>
          <button
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Succesfully","success");
            }}
            className="note_btn"
          >
            <i className="far fa-trash-alt mx-2"></i>
          </button>
          <button className="note_btn" onClick = {()=>{updateNote(note)}}>
            <i className="far fa-edit mx-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
