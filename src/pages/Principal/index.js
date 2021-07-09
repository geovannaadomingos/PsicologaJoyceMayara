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
                        <p className="header_banner_p">Conhecida  por ser um processo de autoconhecimento, autoconstrução - e também de desconstrução - é o encontro que se dá entre terapeuta e cliente, com duração de quarenta e cinco minutos à uma hora.</p>
                        <p className="header_banner_p">Em um espaço que tem como regra o sigilo e o não julgamento, considerando a subjetividade de cada pessoa, o intuito é o de ajudar os indivíduos a desenvolverem toda potência presente na existência.</p>
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
                            <p className="section_sobre_p">Olá, sou Joyce: humana, psicológa(CRP: 02 / 22840), empreendedora, em constante processo de transformação e especializada em psicologia hospitalar. Atualmente, atuo no Hospital de Referência para tratamento da Covid-19, na cidade do Recife - PE, bem como na clínica, realizando atendimentos psicoterápicos - onlines e presenciais - voltados para adultos e idosos.</p>
                            <p className="section_sobre_p">A Abordagem Centrada na Pessoa(ACP), criada pelo também psicólogo Carl Rogers, é a minha abordagem norteadora na clínica. Ela tem como foco a tendência dos seres vivos à atualização e ao crescimento e refere-se a um jeito de ser e de se estar no mundo. Segundo sua perspectiva, para que as pessoas estabeleçam relações genuínas, é necessário: consideração positiva incondicional, empatia e  congruência.</p>
                        </div>
                        <h3 className="section_sobre_h3">“Durante a terapia, o sentimento de aceitação e de respeito do terapeuta em relação ao cliente tende a transformar-se em alguma coisa que se aproxima da admiração, à medida que vamos assistindo a luta profunda e corajosa que a pessoa trava para ser ela própria.” - Carl Rogers</h3>
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