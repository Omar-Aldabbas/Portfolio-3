import { Link } from "react-router-dom";
import "./style/NotFound.css";

export const NotFound = () => {
  return (
    <section className="notfound-section">
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="button-cosmic">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};
