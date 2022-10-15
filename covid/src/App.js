import './App.css';
import Statewise from './Statewise';
import {Route, Switch } from 'react-router-dom'
import Graph from './Graph';
function App() {
  return (
    <>
   
   <Switch>
    <Route exact path="/"><Statewise/></Route>
   <Route ecaxt path='/Graph/:state/:deaths/:recovered/:confirmed/:deltaconfirmed/:deltarecovered/:active'><Graph/></Route>
   </Switch>
    </>
  );
}

export default App;
