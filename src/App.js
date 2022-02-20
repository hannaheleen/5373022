import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import Forum from "./pages/Forum";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Forum} />
        </Switch>
      </Router>
    </>
  );
}
