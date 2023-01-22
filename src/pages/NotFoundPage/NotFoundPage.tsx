import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <p>Page is not found!</p>
      <Link to="/">Back to main</Link>
    </>
  );
};

export default NotFoundPage;
