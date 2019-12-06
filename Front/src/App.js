import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./component/user/ListUserComponent";
import AddUserComponent from "./component/user/AddUserComponent";
import EditUserComponent from "./component/user/EditUserComponent";
import LoginUserComponent from "./component/user/LoginUserComponent";

function App() {
    return (
        <div className="container">
            <Router>
                <div className="col-md-12">
                    <h1 className="text-center" style={style}>Desafio Mirante</h1>
                    <Switch>
                        <Route path="/" exact component={LoginUserComponent} />
                        <Route path="/login" exact component={LoginUserComponent} />
                        <Route path="/users" component={ListUserComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user" component={EditUserComponent} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
