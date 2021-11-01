
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/Shared/NotFound/NotFound';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import Footer from './pages/Shared/Footer/Footer';
import PackageDetails from './pages/Home/BookingProcess/PackageDetails';
import PlaceOrder from './pages/Home/BookingProcess/PlaceOrder';
import Packages from './pages/Home/Packages-section/Packages';
import PrivateRoute from './pages/Login/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders';
import AllOrders from './pages/AllOrders/AllOrders';
import AddPackage from './pages/Home/Packages-section/AddPackage';
import BlogPost from './pages/post-pages/BlogPost';
import AddReview from './pages/post-pages/AddReview';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/packages">
            <Packages></Packages>
          </Route>
          <PrivateRoute path="/packages/:packageId">
            <PackageDetails></PackageDetails>
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/add-a-blog">
            <BlogPost></BlogPost>
          </PrivateRoute>
          <PrivateRoute path="give-a-review">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/my-orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/all-orders">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/add-package">
            <AddPackage></AddPackage>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
