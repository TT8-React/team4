import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from '@mui/material/Button';

export const BoxShadow = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>Click</Button>      {/* This is a default button. You can use the previously created component button here */}
      <Backdrop  open={open} onClick={handleClose}>
      <div style={{ zIndex: 9999 }}>{props.children}</div>
      </Backdrop>
    </>
  );
};
