import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import ProductCategory from "./views/ProductCategory/ProductCategory";
import ContactPage from "./views/ContactPage/ContactPage";
import AboutPage from "./views/AboutPage/AboutPage";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import CartView from "./views/CartView/CartView";
import Orders from "./components/Orders/Orders";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/detail/:id" component={ProductDetail} />
          <Route path="/products/:catId" component={ProductCategory} />
          <Route path="/cart" component={CartView} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
