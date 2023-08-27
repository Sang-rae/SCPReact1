import {Link} from 'react-router-dom';
import './nav.css';
import './home.css';

function Nav({data}) //Json data
{
    return(
      
        <ul className="nav">
         <li className="nav-item">
        <Link className="Home" aria-current="page" to="/">
          Home
        </Link>
        </li>
 
    {
      data.map(
       scp=> (
        <li className="nav-item" key ={scp.Item}>
          <Link className="link "to ={`${scp.Item}`}>{scp.Item}</Link>
        </li>
        
       
       )
      )
    }
          
</ul>
    );
}

export default Nav;