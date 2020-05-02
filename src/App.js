import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddPharmacy from './components/add_pharmacy';
import UpdatePharmacy from './components/edit_pharmacy';
import ViewPharmacy from './components/view_pharmacy';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">
              Virtal Pharmacy
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className='navbar-nav mr-auto'>
                 <li className="nav-item">
                   <Link to={'/'} className="nav-link">
                    New Pharmacy
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link to={'/editpharmacy/:id'} className="nav-link">
                    Edit Pharmacy
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link to={'/viewpharmacy'} className="nav-link">
                    View Pharmacy
                   </Link>
                 </li>
               </ul>

            </div>
          </nav>
          <br/>
          <h2>
            Hello!
          </h2>
          <Switch>
            <Route exact path="/"component={AddPharmacy}/>
            <Route exact path="/addpharmacy"component={AddPharmacy}/>
            <Route exact path="/editpharmacy/:id"component={UpdatePharmacy}/>
            <Route exact path="/viewpharmacy"component={ViewPharmacy}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
