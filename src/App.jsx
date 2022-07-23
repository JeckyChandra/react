import './App.css';
import { Outlet, Link } from "react-router-dom";

//import file sendiri
import './component/header/header.css'
import './component/footer/footer.css'



function App() {
  return (
    <div>
      <header className="header-login-signup">
        <div className="header-limiter">
          <h1><a href="index.html">Tugas<span> Website</span></a></h1>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
      </header>
      <h1>Hallo</h1>
      <Outlet />
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Ini Footer</h1>

          <h2>Contact</h2>

          <address>
            email-coba@gmail.com +628 95465 654<br />
            <a class="footer__btn" href="mailto:example@gmail.com">Email Me</a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media Social</h2>

            <ul className="nav__ul">
              <li>
                <img className="foto" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
                <a href="https://www.facebook.com">Facebook</a>
              </li>

              <li>
                <img className="foto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png" alt="" />
                <a href="https://www.instagram.com">Instagram</a>
              </li>

              <li>
                <img className="foto" src="https://cdn-icons-png.flaticon.com/512/174/174879.png" alt="" />
                <a href="https://www.whatsapp.com">Whatsapp</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Living Time</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <p>Normal Day</p>
                <p>Holiday</p>
                <p>AM 08:00 - PM 21:00</p>
                <p>AM 09:00 - PM 16:00</p>
              </li>

            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Address</h2>

            <ul className="nav__ul">
              <li>
                <p>Programmer street, number 9 London City</p>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2022 Something. All rights reserved.</p>

          <div className="legal__links">
            <span>Made by <span className="heart"></span> tim google </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
