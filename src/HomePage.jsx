import './homepage.css'
import CartaConvenzione from "./CartaConvenzione.jsx";

function HomePage() {

    const logoConv = './assets/logoFenice.png';

    return (
        <div id="home-container">
            <div className=" flex-column">
                <h1 className="title">Convenzioni Fenice</h1>
                <div className="card-list">
                    <CartaConvenzione logoConvenzione={logoConv}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
