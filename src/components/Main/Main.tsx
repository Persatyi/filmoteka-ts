import Container from "../Container";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export default Main;
