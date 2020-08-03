import * as React from "react";
//import icon from '../icon.gif'

export function Uploader() {
  const [files, addFile] = React.useState([]);
  const styles = {
    width: "1000px",
    height: "1000px",
    textAlign: "center",
    backgroundColor: "lightgray",
    color: "white",
    fontSize: "2rem",
  };

  function dragenter(e) {
    e.persist();
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.effect = "copy";
    e.target.style.backgroundColor = "pink";
  }
  function dragover(e) {
    e.persist();
    e.preventDefault();
    e.stopPropagation();
    e.target.style.backgroundColor = "yellow";
  }
  function dragleave(e) {
    e.persist();
    e.preventDefault();
    e.stopPropagation();
    e.target.style.backgroundColor = "red";
    console.log(">>>ITEMS", e.dataTransfer.items);
    console.log(">>>LIST", e.dataTransfer.items);
  }
  function drop(e) {
    e.persist();
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer;
  }

  return (
    <div>
      <ul></ul>
      <div
        className="uploader"
        onDragEnter={dragenter}
        onDragLeave={dragleave}
        onDragOver={dragover}
        onDrop={drop}
      >
        {`Drag your files here
    to upload`}
      </div>
    </div>
  );
}
