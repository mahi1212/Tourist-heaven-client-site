import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Header from './Pages/Shared/Header/Header';
import HomePage from './Pages/Home/HomePage/HomePage';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import NewService from './Pages/NewService/NewService';
import Login from './Pages/Home/Login/Login';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route>
            <Route path='/home'>
              <HomePage></HomePage>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/placeOrder/:orderId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path='/manageOrder'>
              <ManageOrder></ManageOrder>
            </Route>
            <Route path='/newService'>
              <NewService></NewService>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
