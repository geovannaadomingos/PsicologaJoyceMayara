import Nav from "../../components/Nav"
import imagemBorboleta from "../../assets/borboleta_icone.png"
import imagemCasulo from "../../assets/casulo_icone.png"
import imagemJoyce from "../../assets/joyce_perfil.jpeg"
import "./style.css"
import CardsServicos from "../../components/CardsServicos"
import CardsRedesSociais from "../../components/CardsRedesSociais"
import Footer from "../../components/Footer"

const Principal = () => {
    return (
        <>
            <header className="header">
                <Nav />
                <section className="header_banner" id="header_banner">
                    <div className="header_banner_div">
                        <h1 className="header_banner_h1">O que é psicoterapia?</h1>
                        <p className="header_banner_p">parágrafo sobre o que é psicoterapia, bem como qual é a sua importância e como Joyce te ajuda a lidar com isso.</p>
                        <p className="header_banner_p">parágrafo sobre o que é psicoterapia, bem como qual é a sua importância e como Joyce te ajuda a lidar com isso. sdddddddefs dkkjdkjdk ikfejo w     d odo jwdojosdosj dojw s od oje dojoej doj dojoje od odoajdoj ojdoejoj doejdoejd deokdo  do oedowjdj dowjdowdjo</p>
                    </div>
                    <div className="header_banner_div2">
                        <div className="header_banner_div1_img">
                            <img src={imagemBorboleta} alt="imagem borboleta" className="header_banner_img" />
                        </div>
                        <button className="header_banner_button">
                            <a className="header_banner_button_a" href="#section_sobre">conheça mais sobre a psicóloga Joyce</a>
                        </button>
                        <div className="header_banner_div2_img">
                            <img src={imagemCasulo} alt="imagemCasulo" className="header_banner_img" />
                        </div>
                    </div>
                </section>
            </header>
            <main className="main">
                <section className="section_sobre" id="section_sobre">
                    <h2 className="section_sobre_h2">Psicóloga Joyce Mayara Domingos</h2>
                    <div className="section_sobre_div">
                        <img className="section_sobre_img" src={imagemJoyce} alt="imagem psicóloga Joyce Mayara" />
                        <div className="section_sobre_div_p">
                            <p className="section_sobre_p">Aqui será o parágrafo no qual existirão informações sobre a psicóloga, suas experiências, sua área de estuddo e sua abordagem.</p>
                            <p className="section_sobre_p">Aqui será o parágrafo no qual existirão informações sobre a psicóloga, suas experiências, sua área de estuddo e sua abordagem. ashdkdhiuw ahidhiuwh iduha iwuhdiu</p>
                        </div>
                    </div>
                </section>
                <section className="section_servicos" id="section_servicos">
                    <h2 className="section_servicos_h2">Serviços</h2>
                    <CardsServicos />
                </section>
                <section className="section_contatos" id="section_contatos">
                    <h2 className="section_contatos_h2">Contatos</h2>
                    <div className="section_contatos_div_cards">
                        <CardsRedesSociais />
                    </div>
                </section>
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
}
export default Principal