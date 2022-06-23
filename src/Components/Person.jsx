// import { randomColor } from '../Services/StarWarsAPI';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Person(props){
    const [planets, setPlanets] = useState("")
    const [especie, setEspecie] = useState("")
    const {name, gender, eye_color, species, homeworld, url} = props;
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
        fetch(homeworld)
        .then(res=>res.json())
        .then(res=>{
            setPlanets(res.name)
            if(url[url.length-3]!=="/"){
                setId(url[url.length-3]+ url[url.length-2])
                console.log(id)
            }else{
                setId(url[url.length-2])
            }
        })
        
        fetch(species)
        .then(res=>res.json())
        .then(res=>{
            setEspecie(res.name)
        }).catch((e)=>{
            if(e instanceof SyntaxError){
                setEspecie("Human")
            }else{
                setEspecie("Ups! Algo salió mal")
            }
        })
    }, [homeworld, species, url])

    return(
         <Link className="link" to={"/person/" + id}>
            <div style={styles.div}>
                <p><b style={styles.b}>Nombre: {name}</b></p>
                <p><b style={styles.b}>Genero: {gender}</b></p>
                <p><b style={styles.b}>Especie: {especie}</b></p>
                <p><b style={styles.b}>Color de ojos: {eye_color}</b></p>
                <p><b style={styles.b}>Planeta: {planets}</b></p>
            </div>   
        </Link>
    )
}

export default Person