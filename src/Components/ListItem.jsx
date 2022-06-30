import "../static/Main.css"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function ListItem(props){
    const [id, setId] = useState("")
    const {text, url, type} = props;

    useEffect(()=>{
        if(url[url.length-3]!=="/"){
            setId(url[url.length-3]+ url[url.length-2])
        }else{
            setId(url[url.length-2])
        }
    })
    if(type==="planet"){
        return (
            <Link className="link" to={"/planet/" + id}>
                <li className="search-results">{text}</li>
            </Link>
        )
    }else{
        return (
            <Link className="link" to={"/person/" + id}>
                <li className="search-results">{text}</li>
            </Link>
        )  
    }
}