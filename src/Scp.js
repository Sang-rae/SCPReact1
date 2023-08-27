import './scp.css';

function Scp({scp}) // destructuring
{
    return(
        <div className="component-container">
        <p><strong>Item:</strong>{scp.Item}</p>
        <p><strong>Class:</strong>{scp.Class}</p>
        <p><strong>Containment:</strong>{scp.Containment}</p>
        <p><strong>Description</strong>{scp.Description}</p>
        <div className='image-container'>
       <p><strong>Image</strong></p> <img src={scp.Image} alt='SCP images' width="300" height ="200" ></img>
       </div>
        </div>
    );
}
export default Scp; 