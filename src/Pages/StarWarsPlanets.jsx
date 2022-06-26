import { StarWarsPlanets } from "../Services/StarWarsAPI";
import { useState, useEffect} from 'react';
import Planet from "../Components/Planet";
import '../static/Main.css'

function Planets(){
    const [loading, setLoading] = useState(true);
    const [planets, setPlanets] = useState([]);
    const styles = {
        div: {
            color: "yellow"
        }
    }

    useEffect(()=>{
            StarWarsPlanets()
            .then(response=>{
            setPlanets(response.results)
            setLoading(false)
        }
        )
    }
    , [])

    if(loading){
        return (
            <div>
                <div style={styles.div}>Cargando...</div>
    
            </div>
        )
    }else{
        return (
            <div>
                <h1>Planetas</h1>
                {planets.map(planet=><Planet key={planet.name} name={planet.name} climate={planet.climate} terrain={planet.terrain} gravity={planet.gravity} residentURL={planet.residents} url={planet.url}/>)}
            </div>
        )
    }
}

export default Planets;