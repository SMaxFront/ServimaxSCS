/* import Menu from "../Menu/menu";
import smlogo from '../../../public/assets/servimaxlogo.jpg' */
function Header() {
  return (
    <header className="header-container">

      <div className="header-navbar">
        <div className="header-logo">
          <img src="assets/servimaxlogo.jpg" alt="servimax logo" />
          {/* <h4>SERVIMAX: Créditos y Seguros</h4> */}
          {/*  <Menu /> */}
        </div>

        <div className="header-perfil">
          <div>
            <img src="assets/brian-hughes.jpg" alt="" />
          </div>
          <div>
            <h4>UserAdmin</h4>
            <p>Client</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
