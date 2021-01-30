import SiteNav from "./components/navbar"
import Footer from './components/footer'
import './style.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
// npm install react-router-dom 
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
function App() {
  return (
      <BrowserRouter>
        <SiteNav />

        <Switch>
          <Route exact path="/jobs" render={() => <JobsPage />} />
          <Route exact path="/gallery" render={() => <GalleryPage />} />
          <Route exact path="/about" render={() => <AboutPage />} />
          <Route exact path="/contact" render={() => <ContactPage />} />
          <Route exact path="/" render={() => <HomePage />} />
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
