import Navbar from "./components/navbar"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
// npm install react-router-dom 
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Switch>
        <Route exact path="/gallery" render={() => <h1>gallery</h1>} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" render={() => <h1>contact</h1>} />
        <Route exact path="/" component={HomePage} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
