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

export async function getFetchedName(url){ 
    if(Array.isArray(url)){
        const array = await Promise.all(
            url.map(async person=>{
                return await fetch(person).then(response=>response.json())
            })           
        )
        return array.map(item=>item.name)
    }else{
        const res = await fetch(url)
        const resJSON = await res.json()
        return resJSON.name   
    }
}

export async function searchPeople(input){
    const response = await fetch("https://swapi.dev/api/people/?search="+ input)
    const responseJSON = await response.json()
    return responseJSON.results
} 

export async function searchPlanets(input){
    const response = await fetch("https://swapi.dev/api/planets/?search="+ input)
    const responseJSON = await response.json()
    return responseJSON.results
}