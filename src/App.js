import SiteNav from "./components/navbar"
import Footer from './components/footer'
import './style.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {useState, useEffect} from "react"

import HomePage from './pages/HomePage'
import EditUserPage from './pages/EditUserPage'
import EditJobPage from './pages/EditJobPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
function App() {
  const [loggedInUser, setLoggedInUser] = useState(false) 

  //change url from deployed to local here
  const urlDomain = "https://inspo-homes-api.herokuapp.com"
  // const urlDomain = "http://localhost:5000"

  useEffect(() => {
    fetch(`${urlDomain}/users/me/`, {
      method: "GET",
      credentials: 'include'
    })
    .then(data => data.json())
    .then(user => {
      console.log("GETTING USER OBJ APPJS")
      console.log(user)
      if (user) {
        setLoggedInUser(user.user)
      }
  })
  }, [])

  return (
      <BrowserRouter > 
        <SiteNav />

        <Switch>
          <Route exact path="/jobs/:id" render={(props) => <EditJobPage {...props} loggedInUser={loggedInUser} urlDomain={urlDomain}/>} />
          <Route exact path="/gallery" render={() => <GalleryPage />} />
          <Route exact path="/about" render={() => <AboutPage />} />
          <Route exact path="/contact" render={() => <ContactPage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} urlDomain={urlDomain}/>} />

          <Route
            exact path="/users/login" render={() => 
              <LoginPage 
              loggedInUser={loggedInUser} 
              setLoggedInUser={setLoggedInUser} 
              urlDomain={urlDomain}
              />} 
          />

          <Route 
            exact path="/users/register" render={() => 
              <SignUpPage 
              loggedInUser={loggedInUser} 
              setLoggedInUser={setLoggedInUser} 
              urlDomain={urlDomain}
              />} 
          />

          <Route 
            exact path="/users/:id" render={(props) => 
              <EditUserPage {...props} 
              loggedInUser={loggedInUser} 
              setLoggedInUser={setLoggedInUser}
              urlDomain={urlDomain}
              />} 
          />
          
          <Route exact path="/" render={() => 
            <HomePage 
            loggedInUser={loggedInUser} 
            setLoggedInUser={setLoggedInUser} 
            urlDomain={urlDomain} 
            />} 
          />

          <Route path = "/" render={() => <h1>404 page not found</h1> }/>
        </Switch>
        <Footer loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} urlDomain={urlDomain}/>
      </BrowserRouter>
  );
}

export default App;
