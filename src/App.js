import SiteNav from "./components/navbar"
import Footer from './components/footer'
import './style.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {useState, useEffect} from "react"
// npm install react-router-dom 
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
function App() {
  const [loggedInUser, setLoggedInUser] = useState(false) 
  // console.log(withRouter)
  // let history = useHistory()

  useEffect(() => {
    fetch("http://localhost:5000/users/me", {
      credentials: 'include'
    })
    .then(data => data.json())
    .then(user => {
      if (user) {
        setLoggedInUser(user.user)
      }
  })
  }, [])



  return (
      <BrowserRouter > 
        <SiteNav />

        <Switch>
          <Route exact path="/jobs" render={() => <JobsPage/>} />
          <Route exact path="/gallery" render={() => <GalleryPage />} />
          <Route exact path="/about" render={() => <AboutPage />} />
          <Route exact path="/contact" render={() => <ContactPage loggedInUser={loggedInUser} />} />

          <Route
            exact path="/users/login" render={() => 
            <LoginPage 
              // history={history}
              loggedInUser={loggedInUser} 
              setLoggedInUser={setLoggedInUser} 
            />} 
          />
          <Route 
            exact path="/users/register" render={() => 
            <SignUpPage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} 
          />
          
          <Route exact path="/" render={() => <HomePage loggedInUser={loggedInUser} />} />
        </Switch>
        <Footer loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      </BrowserRouter>
  );
}

export default App;
