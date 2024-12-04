const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav className="navbar navbar-expand-sm navbar-light">
                 <div className="container">
                    <a className="navbar-brand" href="/"> Sam's Portfolio</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div classNmae="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li classNmae="nav-item">
                                <a href="#about" className="nav-link"><span data-hover="About">A-propos</span></a>
                            </li>
                            <li className="nav-item">
                                <a href="#project" className="nav-link"><span data-hover="Projects">Projets</span></a>
                            </li>
                            <li className="nav-item">
                                <a href="#resume" className="nav-link"><span data-hover="CV">CV</span></a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link"><span data-hover="Contact">Contact</span></a>
                            </li>
                        </ul>
                    </div>
                 </div>
            </nav>
           
        </div>
     );
}
 
export default Navbar;