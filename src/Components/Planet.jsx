import {getFetchedName} from './../Services/StarWarsAPI';
import { useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';


function Planet(props){
    const {name, climate, terrain, gravity, residentURL, url} = props;
    const [residents, setResidents] = useState([])
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState("")
    const styles = {
        div: {
            padding: "5px",
            margin: "15px auto", 
            width: "600px",
            outline: "solid yellow",
            borderRadius: "6px"
        },
        b:{
            color: "yellow",
            letterSpacing: "2px"
        }
    }

    useEffect(()=>{
        getFetchedName(residentURL)
        .then(res=>{
            setResidents(res);
            setLoading(false);
            if(url[url.length-3]!=="/"){
                setId(url[url.length-3]+ url[url.length-2])
                console.log(id)
            }else{
                setId(url[url.length-2])
            }
        })
    }, [residentURL, url])
    
    if(loading){
        return <h1>Cargando...</h1>
    }else{
        return(
            <Link className="link" to={"/planet/" + id}>
                <div style={styles.div}>
                    <p><b style={styles.b}>Nombre: {name}</b></p>
                    <p><b style={styles.b}>Clima: {climate}</b></p>
                    <p><b style={styles.b}>Ecosistema: {terrain}</b></p>
                    <p><b style={styles.b}>Gravedad: {gravity}</b></p>
                    <p><b style={styles.b}>Residentes:{residents.join(", ")}</b></p>
                    {/* Se que se asigna correctamente pero creo que se vuelve a asignar en un array vacio. O por alguna razón no se asigna  */}
                </div>
            </Link>
        )
    }
}

export default Planet