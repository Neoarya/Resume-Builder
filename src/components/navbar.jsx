import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Resume Builder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="#">
              Features
            </Link>
            <Link className="nav-item nav-link" to="#">
              Pricing
            </Link>
            <Link className="nav-item nav-link" to="#">
            Coming Soon...
          </Link>
  
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
