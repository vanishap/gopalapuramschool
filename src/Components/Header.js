import { Link } from "react-router-dom";
//Link component doesn't reload the whole page, it only refreshes 
//the components. 

const Header = ()=>{
    return (
        <div className="header">
            <Link to="/" style={{textDecoration:'none'}}><p>ZPHS GOPALAPURAM</p></Link>
            <Link to="/login" style={{textDecoration:'none'}}><p>Login</p></Link>
            <Link to="/register" style={{textDecoration:'none'}}><p>Register</p></Link> 
        </div>
    )
};
export default Header;