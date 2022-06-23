import { StarWarsAPI } from "../Services/StarWarsAPI";
import { useState, useEffect } from 'react';
import Person from '../Components/Person';
import '../static/Main.css'

function Characters(){
    const [loading, setLoading] = useState(true);
    const [people, setPeople] = useState([]);
    const styles = {
        div: {
            color: "yellow"
        }
    }

    useEffect(()=>{
            StarWarsAPI()
            .then(response=>{
            setPeople(response.results)
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
        return(
            <div>
                <h1>Personajes</h1>
                {people.map(person=><Person name={person.name} gender={person.gender} eye_color={person.eye_color} species={person.species} homeworld={person.homeworld} url={person.url}/>)}
            </div>
        )
    }
}


export default Characters;