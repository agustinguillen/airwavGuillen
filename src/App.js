import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/Home/Home';
import ProductCategory from './views/ProductCategory/ProductCategory';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import ProductDetail from './views/ProductDetail/ProductDetail';
import CartView from './views/CartView/CartView';

function App() {
  return (
    <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/detail/:id" component={ProductDetail}/>
          <Route path="/products/:catId" component={ProductCategory}/>
          <Route path="/cart" component={CartView} />
        </Switch>
    </Router>
  );
}

export default App;
