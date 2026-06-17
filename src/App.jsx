import "./App.css"
import Navbar from "./components/Navbar.jsx"
import Age from "./components/Age.jsx"
function app(){
  function greet(){
        console.log("helllo!!");
    }
  return(
    <div>
      {/* prop passing */}
      <Navbar name={"Ammar"} Contactno={"000-111-000"} experience={777} greet={greet}/>
      {/* components */}
      <Age/>
      <h1>Ammar</h1>
    </div>
    
  )
}
export default app;