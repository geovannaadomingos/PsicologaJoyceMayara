import "./style.css";
import redesSociais from "../../services/redesSociais"

const CardsRedesSociais= ()=>{
    return(
        <>
            {redesSociais.map(redeSocial => {
                return(
                    <div className="card_contatos">
                       <a target="blank"   href={redeSocial.link} className="card_contatos_a">
                           <img src={redeSocial.img} alt={redeSocial.nome} className="card_contatos_a_img"/>
                           <p className="card_contatos_a_p">{redeSocial.nome}</p>
                       </a>
                    </div>
                )
            })}
        </>
    )
}
export default CardsRedesSociais;
