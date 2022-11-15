export const CardService = (props) => { 
    return (
        <div className="card">
            <img className="card-image" src={ props.image } />

            <div className="card-container">
                <h1 className="card-title">{ props.title }</h1>
                <span className="card-price">AR$ { props.price }</span>
            </div>

            <p className="card-text">{ props.text }</p>
            <button className="card-button" type="button">Más Información</button>    
        </div>
    )
}
