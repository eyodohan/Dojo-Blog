import { NavLink } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page connot be found</p>
            <NavLink to="/" activeStyle={{backgroundColor:"black",color:"white",borderRadius:"4px",textDecoration:"none",cursor:"pointer"}}>Back to the homepage...</NavLink>
        </div>
     );
}
 
export default NotFound;