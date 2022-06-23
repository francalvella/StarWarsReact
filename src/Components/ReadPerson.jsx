import {useParams} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { getPersonById } from '../Services/StarWarsAPI';
import { Link } from 'react-router-dom';
import '../static/Main.css'
import { getFetchedName } from './../Services/StarWarsAPI';

function ReadPerson(){
    const {id} = useParams()
    const [person, setPerson] = useState({})
    const [loading, setLoading] = useState(true);
    const [ships, SetShips] = useState(["Cargando..."])


    useEffect(()=>{
        getPersonById(id)
        .then(res=>{
            setPerson(res);
            getFetchedName(res.starships)
            .then(res=>{
                SetShips(res);
                setLoading(false);
                
                console.log(res)})
    
        })
    }, [id])    
    
    
    if(loading){
        return (
            <div>
                <div>Cargando...</div>
    
            </div>
        )
    }else if(!loading && !person.name){
        return (
            <h1>That is a galaxy too far away... Sorry we could not find it</h1>
        )
    }else{
        return (
            <div className='read-item-container'>
                <Link className="link-read" to={"/person/" + (id-1)}>
                    <div className='read-nav'>Anterior</div>
                </Link>
                <div className='read'>
                    <h1>Personas</h1>
                    <p><b>Nombre: {person.name}</b></p>
                    <p><b>Altura: {person.height}</b></p>
                    <p><b>Masa: {person.mass}</b></p>
                    <p><b>Genero: {person.gender}</b></p>
                    <p><b>Color de ojos: {person.eye_color}</b></p>
                    <p><b>Nacimiento: {person.birth_year}</b></p>
                    <p><b>Color de piel: {person.skin_color}</b></p>
                    <p><b>Naves: {ships.join(", ")}</b></p>
                    {/* Se me muestra el state Ships cuando cambio de personaje */}

                   
                </div>
                <Link className="link-read" to={"/person/" + (parseInt(id)+1)}>
                    <div className='read-nav'>Siguiente</div>
                </Link>
            </div>
        )
    }
}

export default ReadPerson;