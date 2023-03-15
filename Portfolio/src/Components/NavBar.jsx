import "./NavBar.css";
import logo from "../assets/logopablo.png";

function NavBar() {
  const isSCrolling = () => {
    const headerEl = document.querySelector(".primary-header");
    let windowPosition = window.scrollY > 200;
    headerEl.classList.toggle("active", windowPosition);
  };
  window.addEventListener("scroll", isSCrolling);

  return (
    <header class="primary-header">
      <nav class="navbar container">
        <img src={logo} alt="logo" class="logo" />

        <ul class="nav-list">
          <li>
            <a href="#" class="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              Proyects
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
