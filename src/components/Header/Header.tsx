import s from "./Header.module.scss";

import Container from "components/Container";
import Navigation from "components/Header/Navigation";
import TextField from "@mui/material/TextField";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
        <TextField
          id="standard-basic"
          label="Search movies"
          variant="standard"
          size="small"
          fullWidth={true}
        />
      </Container>
    </header>
  );
};

export default Header;
