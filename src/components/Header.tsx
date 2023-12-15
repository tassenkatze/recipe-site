import { NavLink } from "react-router-dom";

function Header() {

    return (
        <div className="Header">
            <div className='Left'>/ᐠ.ꞈ.ᐟ\{')'}</div>
            <div className='Right'>
                <nav id="navigation">
                    <NavLink to="/recipe-site" end>Home</NavLink>
                    <NavLink to="/recipe-site/lego" >Surprise</NavLink>
                    <NavLink to="/recipe-site/create" >Create</NavLink>
                </nav>
            </div>
            <div className='Middle'>Recipe Site</div>
        </div>
    );
}

export default Header;