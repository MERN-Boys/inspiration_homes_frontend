import Navbar from "./components/navbar"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
// npm install react-router-dom 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

export default App;
