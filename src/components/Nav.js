import { NavLink } from "react-router-dom";

//anvendt komando: npm i lottie-react
import animlogo from "../animations/wave2.json";
import Lottie from "lottie-react" 

export default function Nav(){
    return (
        <nav className="globalnavigation">
            <NavLink className="navpunkt" to="/omos">Om os</NavLink>
            <NavLink className="navpunkt" to="/projekter">Projekter</NavLink>
            <NavLink className="navpunkt" to="/"> <Lottie animationData={animlogo} loop={true} height={800} widt={1000}/> </NavLink>
            <NavLink className="navpunkt" to="/bookmøde">Book møde</NavLink>
            <NavLink className="navpunkt" to="/kontakt">Kontakt</NavLink>
            
        </nav>
    )
}