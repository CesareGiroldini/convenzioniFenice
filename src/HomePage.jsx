import './homepage.css'
import CartaConvenzione from "./CartaConvenzione.jsx";
import aperoLogo from './assets/apero.png'

function HomePage() {

    return (
        <div id="home-container">
            <div className=" flex-column">
                <h1 className="title">Convenzioni "La Fenice"</h1>
                <div className="card-list">
                    <CartaConvenzione logoConvenzione={aperoLogo}
                                      descrizione="La Fenice offre un'offerta speciale del 10% da L'Apero."
                    />
                    <CartaConvenzione logoConvenzione={aperoLogo}
                                      descrizione="La Fenice offre un'offerta speciale del 15% da TizioCaio."
                    />
                    <CartaConvenzione logoConvenzione={aperoLogo}
                                      descrizione="La Fenice offre un'offerta speciale del 15% da TizioCaio."
                    />
                    <CartaConvenzione logoConvenzione={aperoLogo}
                                      descrizione="La Fenice offre un'offerta speciale del 15% da TizioCaio."
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
