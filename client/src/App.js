import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddAuthor from './views/AddAuthor';
import Main from './views/Main';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import SingleAuthor from './views/SingleAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div class name="header">
        <Link to ="/api/authors/new">Add a new Author</Link>
        <Link to ="/">All Authors</Link>
      
        </div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path ="/api/authors/new">
            <AddAuthor />
          </Route>

          <Route exact path ="/authors/:_id">
            <SingleAuthor/>
          </Route>

          <Route exact path ="/authors/update/:_id">
            <EditAuthor />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
