import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "../header/header.css";

function Header() {
  return (
    <header className="header-login-signup">
      <div className="header-limiter">
        <h1>
          <a>
            Tugas<span> Website</span>
          </a>
        </h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
}

function HeaderLogOut() {
    const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  
  const backtoHome = () => {
    navigate("/");
  };

  return (
    <header className="header-login-signup">
      <div className="header-limiter">
        <h1>
          <a onClick={backtoHome}>
            Tugas<span> Website</span>
          </a>
        </h1>
        <nav >
          <a onClick={logout}>Log Out</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
export { HeaderLogOut };
