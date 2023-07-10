import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface IProps {
  text: string;
  openSnack: boolean;
  type?: "success" | "error" | "warning" | "info";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MovieSnackbar: React.FC<IProps> = ({
  text,
  openSnack = false,
  type = "success",
}) => {
  const [open, setOpen] = React.useState(openSnack);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={!!type ? type : "success"}
        sx={{ minWidth: "20%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default MovieSnackbar;
