// import Navbar from "./components/navbar"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
// npm install react-router-dom 
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" render={() => <h1>test</h1>}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
