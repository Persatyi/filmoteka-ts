import { ThemeProvider } from "@mui/material/styles";
import { TextField, Box } from "@mui/material/";
import * as s from "./SearchFieldTheme";

const SearchField = () => {
  return (
    <Box component="div" sx={s.box}>
      <ThemeProvider theme={s.theme}>
        <TextField
          id="standard-basic"
          label="Search movies"
          variant="standard"
          type="text"
          fullWidth
          color="primary"
          sx={{
            input: {
              color: "primary.light",
            },
          }}
        />
      </ThemeProvider>
    </Box>
  );
};

export default SearchField;
