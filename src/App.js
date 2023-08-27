import Nav from "./Nav";
import Scp from './Scp.js';
import data from './SCP.json';
import Header from './Header.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home.js';


import './App.css';

function App() {
  return (
    
    <Router>
    <Header/>
    <Nav data ={data}/>
   
     
    <Routes>
    <Route  path={"/"}element ={<Home/>}/>
     
  
    
    { data.map (
      
       scp => (
        <Route key={scp.Item} Item ={scp.Item}
          path={`${scp.Item}`}
          element={<Scp scp={scp}/>}
         
        />
       )
      
     )}
 
</Routes>
   
     </Router>
  );
}



export default App;

