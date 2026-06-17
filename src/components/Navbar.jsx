function Navbar({name , Contactno , experience , greet}){
    
    return(
        <div>
        {name}
        <p>Contact no: {Contactno}</p>
        <h2>Experience: {experience}</h2>
        {greet()}
        <div>
            <ul>
                <li>
                    Home
                </li>
            </ul>
        </div>
        </div>
    );
}
export default Navbar;