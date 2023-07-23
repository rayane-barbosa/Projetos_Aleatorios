import data from "./data";

function CardFilme(){
    return(
        <div className="alinhaCard">
            {data.map((filme)=>(
                <div key={filme.id}>
                    <img className="Capa" src={filme.capa} alt={filme.nome}/>
                    </div>
            ))}
        </div>

    );
}

export default CardFilme;