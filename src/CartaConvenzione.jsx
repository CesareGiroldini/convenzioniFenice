import { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { CSSTransition } from 'react-transition-group';
import logo from './assets/logoFenice.png';

export default function CartaConvenzione({ logoConvenzione }) {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    function toggleDescription() {
        setIsDescriptionVisible(!isDescriptionVisible);
    }

    const footer = (
        <div className="card-footer my-auto text-center">
            <Button
                label="Scopri di più"
                icon={<i className={`pi ${isDescriptionVisible ? 'pi-angle-up' : 'pi-angle-down'}`} style={{ color: 'slateblue' }} />}
                onClick={toggleDescription}
                className="p-button-lg w-8 md:w-6 p-button-block"
                style={{ backgroundColor: 'lightgreen' }}
            />
        </div>
    );

    return (
        <div className="card-container flex flex-column align-items-center">
            <Card className="cardBody md:w-25rem w-20rem" footer={footer}>
                <div className="card-content h-8rem">
                    <div className="card-header h-9rem">
                        <img src={logo} alt="Logo Sinistro" className="logo h-11rem" />
                        <p className="text-3xl">X</p>
                        <img src={logoConvenzione} alt="Logo Destro" className="logo" />
                    </div>
                </div>
            </Card>
            <CSSTransition
                in={isDescriptionVisible}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <Card className="md:w-25rem description-card mt-3">
                    <p>
                        L'associazione la Fenice offre un 10% di sconto da **tiziocaiosempronio**.
                    </p>
                </Card>
            </CSSTransition>
        </div>
    );
}
