import {Link} from "react-router-dom"

// a replace with Link 
// href replace with to 

function Header() {
  return (
    <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <Link to="/" className="logo">
                        <img src="assets/images/logo.png" alt="" />
                    </Link>
                    <div className="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                        <i className="fa fa-search"></i>
                      </form>
                    </div>
                    <ul className="nav">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/browse">Browse</Link></li>
                        <li><Link to="/detail">Details</Link></li>
                        <li><Link to="/streams">Streams</Link></li>
                        <li><Link to="/profile">Profile <img src="assets/images/profile-header.jpg" alt="" /></Link></li>
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>
  );
}

export default Header;
