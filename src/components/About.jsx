import { useEffect, useState } from 'react';
import '../styles/components/about.css';
import { AboutCircle } from './AboutCircle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const arrayOfPhrases = [
    'Hagas lo que hagas, todo es mejor con un sitio o aplicación', 
    'Diseñamos sistemas a tu medida', 
    'Generamos valor aplicando nuestra expertise en estas áreas'
];

export const About = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((currentValue) => {
                if (currentValue + 1 === arrayOfPhrases.length) return 0;
                return currentValue + 1;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about">
            <div className="about" id="about">
                <h1 className="about-title" data-aos="fade-down">Boren Development</h1>
                <SwitchTransition>
                    <CSSTransition classNames="fade" key={ arrayOfPhrases[index] } addEndListener={ (node, done) => node.addEventListener('transitionend', done, false) }>
                        <h2 className="about-subtitle">
                            {arrayOfPhrases[index]}
                        </h2>
                    </CSSTransition>
                </SwitchTransition>    
                <div className="about-circles">
                    <AboutCircle 
                        text="Brindamos soluciones tecnológicas de alta calidad." 
                        icon="fas fa-code" 
                        aosType="fade-down" 
                        id="1" 
                    />
                    <AboutCircle 
                        text="Desarrollo de aplicaciones basadas en WEB." 
                        icon="fas fa-laptop-code" 
                        aosType="fade-up" 
                        id="2" 
                    />
                    <AboutCircle 
                        text="Si puede explicarlo e imaginarlo, nosotros podemos crearlo." 
                        icon="fas fa-user-alt" 
                        aosType="fade-down" 
                        id="3" 
                    />
                    <AboutCircle 
                        text="Tiempos rápidos de entrega y atención personalizada." 
                        icon="fas fa-shipping-fast" 
                        aosType="fade-up" 
                        id="4" 
                    />
                </div>
            </div>
            <div className="about-info">
                <div data-aos="fade-right" className="about-info_box" id="about-info_box-mision">
                    <div className="about-info_box-container">
                        <div className="about-info_box-semaforo">
                            <div className="about-info_box-semaforo_circunference color_red"></div>
                            <div className="about-info_box-semaforo_circunference color_yellow"></div>
                            <div className="about-info_box-semaforo_circunference color_green"></div>
                        </div>
                        <h3 className="about-info_box-title">Misión</h3>
                    </div>

                    <p className="about-info_box-text">
                        En <span>Boren</span> somos apasionados por la tecnología. Nos esforzamos por
                        adaptarnos a la nuevas tecnologías, crecer y mejorar continuamente en lo que hacemos,
                        con el objetivo de entregar al cliente, el mejor producto. A través de estos
                        principios, nuestro desear es lograr la máxima satisfacción de nuestros clientes y usuarios.
                    </p>
                </div>
                <div data-aos="fade-left" className="about-info_box" id="about-info_box-vision">
                    <div className="about-info_box-container">
                        <h3 className="about-info_box-title">Visión</h3>
                        <div className="about-info_box-semaforo">
                            <div className="about-info_box-semaforo_circunference color_red"></div>
                            <div className="about-info_box-semaforo_circunference color_yellow"></div>
                            <div className="about-info_box-semaforo_circunference color_green"></div>
                        </div>
                    </div>

                    <p className="about-info_box-text">
                        Ser reconocidos como una empresa con servicios de calidad, excelencia e integralidad, 
                        con un alto nivel de satisfacción de sus clientes, empleados y socios.
                    </p>
                </div>
            </div>
        </section>
    )
}
