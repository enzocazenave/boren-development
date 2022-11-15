import '../styles/components/contact.css';

export const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-maincontainer">
                <div className="contact-container">
                    <div className="contact-box">
                        <i className="fa fa-phone"></i>
                        <p>+54 9 11 4528 0608</p>
                    </div>

                    <div className="contact-box">
                        <i className="fab fa-instagram"></i>
                        <p>borendev</p>
                    </div>

                    <div className="contact-box">
                        <i className="far fa-envelope-open"></i>
                        <p>boren@development.com</p>
                    </div>
                </div>
                <form className="contact-form">
                    <div className="contact-title-container">
                        <div className="contact-bar"></div>
                        <h1 className="contact-title">Contacto</h1>
                        <div className="contact-bar"></div>
                    </div>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Asunto" />
                    <textarea placeholder="Mensaje"></textarea>
                    <button type="button">Enviar consulta</button>
                </form>
            </div>
        </div>
    )
}