import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Router } from '@reach/router'
import Main from './views/Main'
import AddPet from './views/AddPet'
import ViewPet from'./views/ViewPet'
import UpdatePet from './views/UpdatePet'

const App = props => {
  return (
    <>
      <div className="nav">
        <h1 className="site-title">Pet Shelter</h1>
        <button className="btn btn-primary create-btn"><Link className="create-link" to="/pet/new">Add A Pet To The Shelter</Link></button>
        {/* <button className="btn btn-primary view-btn"><Link className="view-link" to={`/pirate/${props.pet._id}`}>View Pet</Link></button> */}
      </div>
      <Router>
        <Main path="/" />
        <AddPet path="/pet/new" />
        <ViewPet path="/pet/:_id" />
        <UpdatePet path="pet/update/:_id" />
      </Router>
    </>
  );
}

export default App;
