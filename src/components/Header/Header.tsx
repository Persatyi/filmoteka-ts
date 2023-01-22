import s from "./Header.module.scss";

import Container from "components/Container";
import Navigation from "./Navigation";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Container>
          <Navigation />
          <SearchField />
        </Container>
      </header>
    </>
  );
};

export default Header;
