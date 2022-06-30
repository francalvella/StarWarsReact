import '../static/Main.css'
import { useEffect, useState } from 'react';
import { searchPeople, searchPlanets } from '../Services/StarWarsAPI';
import { ListItem } from './../Components/ListItem';


function Main(){
    const [personInput, setPersonInput] = useState("")
    const [planetInput, setPlanetInput] = useState("")
    const [results, setResults] = useState([])
    const styles = {
        h1: {
            fontFamily: 'Star Jedi, Arial',
            fontSize: "70px",
            color: 'yellow',
            textAlign: "center"
        }
    }

    function planetChange(event){
        let text = event.target.value
        setPlanetInput(text)
    }

    function personChange(event){
        let text = event.target.value
        setPersonInput(text)
    }

    useEffect(()=>{
        const planetResults = document.getElementById("planet-results")
        const peopleResults = document.getElementById("people-results")
            if(planetInput){
                planetResults.style.visibility = "visible"
                searchPlanets(planetInput)
                .then(res=>setResults(res))

            }else if(personInput){
                peopleResults.style.visibility = "visible"
                searchPeople(personInput)
                .then(res=>setResults(res))
            }else{
                peopleResults.style.visibility = "hidden"
                planetResults.style.visibility = "hidden"
            }

        
    }, [personInput, planetInput])
    
    return (
        <main>
            <h1 style={styles.h1}>Star Wars Info</h1>
            <form className='search-form' action="GET">
                <div className='search-container'>
                    <input className="main-search" type="text" value={planetInput} placeholder='Buscar planetas...' onChange={planetChange}></input>
                    <ul id="planet-results" className='search-results-list'>
                        {results.map(result=><ListItem key={result.name} text={result.name} url={result.url} type="planet"/>)}
                    </ul>
                </div>
                <div className='search-container'>
                    <input className="main-search" type="text" value={personInput} placeholder='Buscar personas...' onChange={personChange}></input> 
                    <ul id="people-results" className='search-results-list'>
                        {results.map(result=><ListItem key={result.name} text={result.name} url={result.url} type="person"/>)}
                    </ul>
                </div>
            </form>
        </main>
    )
    }

export default Main;