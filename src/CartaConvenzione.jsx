import {Button} from "primereact/button";
import {Card} from "primereact/card";
import logo from './assets/logoFenice.png';

export default function CartaConvenzione({logoConvenzione}) {

    const footer = (
        <div className="card-footer my-auto text-center">
            <Button label="Scopri di più" icon={<i className="pi pi-angle-down" style={{color: 'slateblue'}}/>}
                    className="p-button-lg w-8 md:w-6 p-button-block" style={{ backgroundColor: 'lightgreen'}}/>
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card className="md:w-25rem" footer={footer}>
                <div className="card-content">
                    <div className="card-header">
                        <img src={logo} alt="Logo Sinistro" className="logo" />
                        <img src={logoConvenzione} alt="Logo Destro" className="logo"/>
                    </div>
                </div>
            </Card>
        </div>
    )
}

