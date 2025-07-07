import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFoundPage = () => (
  <div className="not-found">
    <div className="not-found-card">
      <h1 className="not-found-title">
        404
        <br />
        not-found
      </h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-text">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="not-found-link">
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
