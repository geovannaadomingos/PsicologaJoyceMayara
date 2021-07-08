import "./style.css"
import logo from "../../assets/logo.png"

const Nav = () => {
    return(
        <nav className="nav">
            <div className="nav_div_logo">
                <img className="nav_div_img_logo" src={logo} alt="logo"/>
            </div>
            <ul className="nav_ul">
                <li className="nav_li"><a className="nav_li_a" href="/">Início</a></li>
                <li className="nav_li"><a className="nav_li_a" href="#section_sobre">Sobre</a></li>
                <li className="nav_li"><a className="nav_li_a" href="#section_servicos">Serviços</a></li>
                <li className="nav_li"><a className="nav_li_a" href="#section_contatos">Contatos</a></li>
            </ul>
        </nav>
    );
}

export default Nav;