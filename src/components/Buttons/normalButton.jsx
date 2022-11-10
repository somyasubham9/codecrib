import React from "react";
import Button from "react-bootstrap/Button";
const NormalButton = (props) => {
  const { name, variant } = props;
  return (
    <>
      <Button style={{ margin: "auto", width:'10rem' ,height:'4rem' ,fontSize:'25px', color:'whitesmoke'}} variant={variant}>
        {name}
      </Button>
    </>
  );
};

export default NormalButton;
