import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AboutCircle = ({ text, icon, aosType, id}) => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos={ aosType } className="about-circle">   
            <div className="about-circle_container">
                <article className="about-circle_circunference" id={`about-circle_circunference-${id}`}>
                    <i className={ icon }></i>
                </article>
            </div>
            <p className="about-circle_text">
                { text }
            </p>
        </div>
    ) 
}
