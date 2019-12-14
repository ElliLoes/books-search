import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoBook from "./pages/NoBook";
import Nav from "./components/Nav";
import { Container} from "./components/Grid";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Container>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
          <Route exact path="/books/:id" component={null} />
          <Route component={NoBook} />
        </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
