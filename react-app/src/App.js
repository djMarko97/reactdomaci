import TopBar from "./components/topbar/TopBar";
import Write from "./pages/home/write/Write";
import Settings from "./pages/home/settings/Settings";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Contact from "./pages/home/contact/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ?  <Write /> : <Register />}</Route>
        <Route path ="/contact"><Contact /></Route>
        <Route path="/settings">{user ? <Settings /> : <Register/>}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
