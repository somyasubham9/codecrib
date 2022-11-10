import React from "react";
import Button from "react-bootstrap/Button";
const Buttons = (props) => {
  const { name, variant } = props;
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    // props.handleFile(fileUploaded);
  };
  return (
    <>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <Button
        onClick={handleClick}
        style={{ margin: "auto" }}
        variant={variant}
      >
        {name}
      </Button>
    </>
  );
};

export default Buttons;
