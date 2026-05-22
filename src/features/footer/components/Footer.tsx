import Logo from "../assets/QA_eng.webp";
import "../styles/footer.css";
export default function Footer() {
  const currentDate = new Date();
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__branding">
          <img src={Logo} alt="QA engeenier" />
          <p className="footer__copyright">
            Industrial QA Specialist © {currentDate.getFullYear()}
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__links">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
