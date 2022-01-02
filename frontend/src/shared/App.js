import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../assets/scss/global.scss';
import Home from "../pages/Home";
import Shorties from "../pages/Shorties";
import Twins from "../pages/Twins";
import Wiki from "../pages/Wiki";
import Post from "../pages/Post";


class App extends Component{
    render(){
      return(
        <>
          <Switch>
            <Route exact path={ "/shorties" } component={ Shorties } />
            <Route exact path={ "/twins" } component={ Twins } />
            <Route exact path={ "/wiki" } component={ Wiki } />
            <Route exact path={ "/post" } component={ Post } />
            <Route path={ "/" } component={ Home } />
          </Switch>
        </>
      );
    }
}
export default App;