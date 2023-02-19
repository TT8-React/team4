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
      <Button color="success"  onClick={handleOpen}>{props.children}</Button> {/*The button can be changed to anything else */}
      <Backdrop  open={open} onClick={handleClose}>
      <div style={{ zIndex: 9999 }}>{props.content}</div>
      </Backdrop>
    </>
  );
};
