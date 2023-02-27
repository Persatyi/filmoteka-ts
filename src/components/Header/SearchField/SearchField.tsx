import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { TextField, Box } from "@mui/material/";
import * as s from "./SearchFieldTheme";

import { useAppDispatch } from "hooks/hooks";
import { setSearch } from "redux/dataSlice/dataSlice";

const SearchField = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const onSubmitHeandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (value === "") return;

    dispatch(setSearch(value));
  };

  return (
    <Box component="div" sx={s.box}>
      <ThemeProvider theme={s.theme}>
        <form onSubmit={(e) => onSubmitHeandler(e)}>
          <TextField
            id="standard-basic"
            label="Search movies"
            variant="standard"
            type="text"
            fullWidth
            color="primary"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            sx={{
              input: {
                color: "primary.light",
              },
            }}
          />
        </form>
      </ThemeProvider>
    </Box>
  );
};

export default SearchField;
