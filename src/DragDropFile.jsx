import React, { useState } from "react";
import "./DragDropFile.css";
import axios from "axios";
import Answer from "./Answer";
import LoadingModal from "./LoadingModal";
// drag drop file component
function DragDropFile() {
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [ans, setAns] = useState({});
 const [modalShow, setModalShow] = React.useState(false);
  const [loadershow,setLoadershow]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Button");
    let formData = new FormData();
    formData.append("file1", file);
    formData.append("file2", file1);

    // formData.append('file1', formValue.file1);
    // formData.append('file1', formValue.file2);

    axios
      .post(
        "hhttps://web-production-b98b.up.railway.app/api/upload/",
        formData
      )
      .then((response) => {
        console.log(response.data);
        setAns(response.data);
    
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer?.files && e.dataTransfer?.files[0]) {
      const fileUploaded = e.dataTransfer?.files[0];
      const fileUploaded1 = e.dataTransfer?.files[1];
      setFile(fileUploaded);
      setFile1(fileUploaded1);
     
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const fileUploaded = e.target.files[0];
      const fileUploaded1 = e.target.files[1];
      setFile(fileUploaded);
      setFile1(fileUploaded1);
      console.log(fileUploaded);
      console.log(fileUploaded1);
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = (e) => {
    inputRef.current.click();
  };

  return (
    <>
      <form
        id="form-file-upload"
        onDragEnter={handleDrag}
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? "drag-active" : ""}
        >
          <div>
            <p>Drag and drop your file here or</p>
            <button
              className="upload-button"
              type="button"
              onClick={onButtonClick}
            >
              Upload a file
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
        <div className="check-btn">
          <button type="submit" onClick={() => {setModalShow(true);setLoadershow(true)}}>
            Show Answer
          </button>
        </div>
      </form>
      {loadershow && !ans.data && <LoadingModal />}
      {ans.data && <Answer ans={ans}  show={modalShow}
        onHide={() => setModalShow(false)} onHideLoad={()=>setLoadershow(false)} />}
    </>
  );
}

export default DragDropFile;
