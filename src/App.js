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
      {/* <Route exact path="/" component={HomePage} />
      <Route exact path="/gallery" component={GalleryPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} /> */}
    </BrowserRouter>
  );
}

export default App;
