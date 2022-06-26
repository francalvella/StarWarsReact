import {useParams} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { getPlanetById } from '../Services/StarWarsAPI';
import { Link } from 'react-router-dom';
import '../static/Main.css'
import { getFetchedName } from '../Services/StarWarsAPI';

function ReadPlanet(){
    const {id} = useParams()
    const [planet, setPlanet] = useState({})
    const [loading, setLoading] = useState(true);
    const [residents, setResidents] = useState(["Sin residentes"])


    useEffect(()=>{
        getPlanetById(id)
        .then(res=>{
            setPlanet(res);
            getFetchedName(res.residents)
            .then(res=>{
                setResidents(res);
                setLoading(false);
            })
    })
    }, [id])    
    
    if(loading){
        return (
            <div>
                <div>Cargando...</div>
    
            </div>
        )
    }else if(!loading && !planet.name){
        return (
            <h1>That is a galaxy too far away... Sorry we could not find it</h1>
        )
    }else{
        return (
            <div className='read-item-container'>
                <Link className="link-read" to={"/planet/" + (id-1)}>
                    <div className='read-nav'>Anterior</div>
                </Link>
                <div className='read'>
                    <h1>Planetas</h1>
                    <p><b>Nombre: {planet.name}</b></p>
                    <p><b>Clima: {planet.climate}</b></p>
                    <p><b>Ecosistema: {planet.terrain}</b></p>
                    <p><b>Gravedad: {planet.gravity}</b></p>
                    <p><b>Población: {planet.population}</b></p>
                    <p><b>Diámetro: {planet.diameter}</b></p>
                    <p><b>Periodo Orbital: {planet.orbital_period} días</b></p>
                    <p><b>Periodo de Rotación: {planet.rotation_period} HS</b></p>    
                    <p><b>Residentes: {residents.join(", ")} </b></p>    
                    {/* Solo puedo ver los residentes cuando cambio de componente. */}
                </div>
                <Link className="link-read" to={"/planet/" + (parseInt(id)+1)}>
                    <div className='read-nav'>Siguiente</div>
                </Link>
            </div>
        )
    }
}

export default ReadPlanet;