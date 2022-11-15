import '../styles/components/clients.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Clients = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section data-aos="fade-up" className="clients" id="clients">
            <h1 className="clients-title">Clientes</h1>
            <p className="clients-text">
                <span className="clients-span">Boren Development</span> tiene entre sus principales clientes a medianas y grandes
                empresas, industrias, organizaciones publicas y privadas, 
                entes gubernamentales entre otros, brindándoles nuestro 
                asesoramiento, productos y soporte técnico pos venta, 
                garantizando a nuestros clientes un servicio integral acorde 
                a sus necesidades.
            </p>
        </section>
    )
}