import NavBar from './Pages/Navbar/navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/dashboard';
import CourseTileList from './Pages/CourseTileList/CourseTileList';
import CourseDetail from './Pages/CourseDetail/courseDetail';
import Wishlist from './Pages/Wishlist/wishlist';
import ShoppingCart from './Pages/ShoppingCart/shoppingCart';



function App() {

  return (
    <div className="App">
      <Router>
        <Route component={NavBar} />
        <Route path={"/"} component={Dashboard} />
        <Switch>

          <Route exact path={"/"} component={CourseTileList} />
          <Route exact path={'/wishlist'} component={Wishlist} />
          <Route exact path={'/shopping-cart'} component={ShoppingCart} />
          <Route exact path={"/:id"} component={CourseDetail} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
