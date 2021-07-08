import servicos from "../../services/servicos"
import "./style.css"

const CardsServicos = () => {
    return(
        <div className="cards">
            {servicos.map(servico => {
                return(
                    <div className="card">
                        <div className="card_div_icone">
                            <img className="card_icone" src={servico.img} alt="icone"/>
                        </div>
                        <h3 className="card_h3">{servico.nome}</h3>
                        <p className="card_p">{servico.descricao}</p>
                    </div>
                )
            })}
        
        </div>
    );
}
export default CardsServicos;