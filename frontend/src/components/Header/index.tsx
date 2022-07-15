import "./styles.css";
import logo from '../../assets/img/logo.svg';

function Header() {
  return(
  <header>
    <div className="dsmeta-logo-container">
      <img src={logo} alt="DSMeta" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvido por
        <a href="https://github.com/matheusproencaz">@matheusproencaz</a>
      </p>
      <p>Semana DevSuperior <a href="https://www.instagram.com/devsuperior.ig">@devsuperior</a></p>
    </div>
  </header>
  );
}

export default Header
