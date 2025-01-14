import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



const NavBar = () => {
  var prevScrollpos = window.scrollY;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("main-navbar").style.top = "0";
    } else {
      document.getElementById("main-navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  const location = useLocation();

  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <nav id="main-navbar">
      <ul>
        <li className={splitLocation[1] === "" ? "main-nav-active" : ""}>
          <Link className="main-nav-a" to="/">
            Home
          </Link>
        </li>

        <li
          className={splitLocation[1] === "documents" ? "main-nav-active" : ""}>
          <Link className="main-nav-a" to="/documents">
            Docs
          </Link>
        </li>

        <li
          className={splitLocation[1] === "developers" ? "main-nav-active" : ""}>
          <Link className="main-nav-a" to="/developers">
            Devs
          </Link>
        </li>

        <li className={splitLocation[1] === "backlog" ? "main-nav-active" : ""}>
          <Link className="main-nav-a" to="/backlog">
            BackLog
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
