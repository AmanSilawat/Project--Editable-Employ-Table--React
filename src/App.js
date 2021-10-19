import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';


function App() {

    return (
        <div className="container">
            <Router>
                <div className="col-md-12">
                    <h1 className="text-center" style={style}>Employ Data Module</h1>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

const style = {
    color: 'gray',
    margin: '30px'
}

export default App;
