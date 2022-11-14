import '../styles/components/header.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../helpers/header';
import { useEffect } from 'react';

export const Header = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <header className="header">
            <h1 className="header-title">BOREN<sup>dev</sup></h1>
            <ul className="header-nav">
                <li className="header-nav_li"><a id="about-item" className="header-nav_li--a header-nav_li--a__selected" href="#about">¿Quienes somos?</a></li>
                <li className="header-nav_li"><a id="services-item" className="header-nav_li--a" href="#services">Servicios</a></li>
                <li className="header-nav_li"><a id="clients-item" className="header-nav_li--a" href="#">Clientes</a></li>
                <li className="header-nav_li"><a id="contact-item" className="header-nav_li--a" href="#">Contacto</a></li>
            </ul>
        </header>
    )
}