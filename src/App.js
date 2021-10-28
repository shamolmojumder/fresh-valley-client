import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home';
import Tables from './components/Tables/Tables';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/admin">
            <Admin></Admin>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/productList">
          <ProductList></ProductList>  
        </Route>
        <Route path="/manage">
          <Tables></Tables>
        </Route>
 
        <Route path="*">
            <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
