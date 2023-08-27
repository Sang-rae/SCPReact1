import {Link} from 'react-router-dom';
import data from './SCP.json';

import './home.css';



function Home()
{
  return(
    <div className="home-container">
    <div className="row">
        {
            data.map
            (
                scp=> ( 
                    <div key={scp.Item} className ="col-md-4 mb-e">
                      <div className ="card d-flex align-items-center justify-content-center">
                      <div className='scp-image-container'>
                    <img src ={scp.Image} className="card-img-top scp-image"></img>
                    </div>
                    <div className="card-body">
            <h5 className="card-title">{`Item :${scp.Item}`}</h5>
            <h5 className="card-class">{`Class :${scp.Class}`}</h5>
            <Link to={`/${scp.Item}`} className="btn">
              Click for Info....
            </Link>
           
          </div>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Home;

     