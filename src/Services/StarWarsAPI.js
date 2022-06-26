export async function StarWarsAPI(){
    const response = await fetch("https://swapi.dev/api/people")
    return await response.json()
}

export async function StarWarsPlanets(){
    const response = await fetch("https://swapi.dev/api/planets")
    return await response.json()
}

export async function getPlanetById(id){
    const response = await fetch("https://swapi.dev/api/planets/" + id)
    return await response.json()
}

export async function getPersonById(id){
    const response = await fetch("https://swapi.dev/api/people/" + id)
    return await response.json()
}

export async function getFetchedName(...args){ 
    if(Array.isArray(args[0])){
        const array = await Promise.all(
            args[0].map(async person=>{
                return await fetch(person).then(response=>response.json())
            })           
        )
        return array.map(item=>item.name)
    }else{
        const res = await fetch(args[0])
        const resJSON = await res.json()
        return resJSON.name   
    }
}
