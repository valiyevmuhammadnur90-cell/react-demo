import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="nf-wrapper">
      <div className="nf-card">
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">Page Not Found</h2>
        <p className="nf-description">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="nf-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
