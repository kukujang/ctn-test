import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import ViewContent from './containers/ViewContent';
import ViewCategory from './containers/ViewCategory';
import ViewMain from './containers/ViewMain';
import ViewFilter from './containers/ViewFilter';

class App extends Component {
  renderRouter(){
    return(
      <Switch>
        <Route exact path='/' component={Home} />
				<Route path='/content' component={ViewContent} />
				<Route path='/category' component={ViewCategory} />
				<Route path='/filter' component={ViewFilter} />

				<Route path='/library' component={ViewMain} />
				<Route path='/ranking' component={ViewMain} />
      </Switch>
    )
  }
  render() {
    return(
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;