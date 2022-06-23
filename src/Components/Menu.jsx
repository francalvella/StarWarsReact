import {Link} from "react-router-dom"
import '../static/Main.css'

function Menu(){

    return(
        <header>
            <nav className="nav">
                <ul className="nav-list" >
                    <li className="nav-list-item" ><Link className="link"  to="/">Home</Link></li>
                    <li className="nav-list-item" ><Link className="link"  to="/personajes">Personajes</Link></li>
                    <li className="nav-list-item" ><Link className="link"  to="/planetas">Planetas</Link></li>
                </ul>
                <ul className="user-nav">
                    <li className="user-nav-item" ><Link className="link"  to="/login">Login</Link></li>
                    <li className="user-nav-item" ><Link className="link"  to="/signin">Sign in</Link></li>
                </ul>
            </nav> 
        </header>

    )
}

export default Menu;