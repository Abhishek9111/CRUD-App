import React from 'react'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';

//pages
import Home from './pages/Home'
import AddEdit from './pages/AddEdit'
import About from './pages/About'

function App() {
  return (

    <BrowserRouter>
    <div className = 'App'>
    <Header />
    <ToastContainer position = 'top center'/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/add' component={AddEdit}/>
        <Route  path='/update/:id' component={AddEdit}/>
        <Route path='/about' component ={About}/>

        
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
