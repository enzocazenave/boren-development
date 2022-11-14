import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/components/services.css';
import { useEffect } from 'react';
import { CardService } from './CardService';

export const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section className="services" id="services">
            <div data-aos="fade-down" className="service-title-container">
                <div className="services-bar"></div>
                <h1 className="services-title">¿Qué servicios ofrecemos?</h1>
                <div className="services-bar"></div>
            </div>

            <div data-aos="fade-up" className="cards">
                <CardService
                    title="Landing Page"  
                    price="250.000"
                    text="Una landing page es una página donde las personas llegan para conocer tu propuesta y realizar una acción que muchas veces es contactarse con usted."
                    image="https://cdn.discordapp.com/attachments/1008885821027405958/1040741422980157490/22817910_85682372133663.jpg"
                />
                <CardService
                    title="Panel Administrativo" 
                    price="500.000"
                    text="Los responsables del sitio pueden modificar algunos contenidos de la app. Incluso se pueden crear niveles y permisos de usuarios para limitar las acciones que pueda hacer cada uno dentro de la aplicación Web."
                    image="https://kinsta.com/es/wp-content/uploads/sites/8/2018/03/panel-de-administración-de-wordress-3.png"
                />
                <CardService
                    title="Página Web" 
                    price="300.000"
                    text="Página o sitio Web con usuarios (Inicio de sesión, Crear cuenta), personalizar perfiles, etc."
                    image="https://ayudahosting.online/wp-content/uploads/2019/05/loginpage-tml.png"
                />
            </div>
        </section>
    ) 
}