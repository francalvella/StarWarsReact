export function StarWarsAPI(){
    return fetch("https://swapi.dev/api/people")
            .then(response=>response.json())
}

export function StarWarsPlanets(){
    return fetch("https://swapi.dev/api/planets")
            .then(response=>response.json())
}

export function getPlanetById(id){
    return fetch("https://swapi.dev/api/planets/" + id)
            .then(response=>response.json())
}

export function getPersonById(id){
    return fetch("https://swapi.dev/api/people/" + id)
            .then(response=>response.json())
}


// Quise haacer una función que pueda reutilizar para solicitar información a la API cuando me dan arrays de URLs.
// Por más que me devuelve el array como quiero, no logro que se me asigne en los states
export function getFetchedName(...args){
    return new Promise((resolve,reject)=>{
        let array = []
        for(let i=0;i<args.length;i++){
            if(Array.isArray(args[i])){
                args[i].map(person=>{
                    fetch(person).then(response=>response.json())
                    .then(response=>array.push(response.name))
                })
            }else{
                fetch(args[i]).then(response=>response.json())
                .then(response=>array.push(response.name))
            }
        };
        resolve(array)
        
    })
}