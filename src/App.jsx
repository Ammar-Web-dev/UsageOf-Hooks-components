import { NavLink } from "react-router";
import { useNavigate } from "react-router";

function app(){
    let navigate = useNavigate();
    function login(e){
      e.preventDefault();
      try{
        // Api call
        navigate("/about")
      }catch (err){}
      
    }
  return(
    <div>
      <h1>Routing</h1>
      <NavLink to="/contact-us">Contact-US</NavLink>
      <br /><NavLink to="/about">About</NavLink>
    <form onSubmit={login}>
      <input type="text" name="username" id="username" />
      <input type="text" name="password" id="password" />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
export default app;