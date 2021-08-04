import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import SignUp from "../pages/SignUp";
import SingIn from "../pages/SingIn";
import Game from "../pages/Game";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contacts">
          <Contacts/>
        </Route>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/sign-in">
          <SingIn/>
        </Route>
        <Route path="/game/:id">
          <Game/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};