
// import HomePage from "../pages/HomePage"
function Navbar() {
  return (
    <>
        <BrowserRouter>
            <Link to="/" >Home</Link>
            
            <Switch>
                <Route exact path="/" render={() => <h1>test</h1>}/>
            </Switch>
        </BrowserRouter>
    </>
  );
};

export default Navbar;

