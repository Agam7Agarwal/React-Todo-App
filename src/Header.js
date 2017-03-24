/**
 * Created by agam on 23/3/17.
 */
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import Login from './Login'
import Todo from './Todo'
import Home from './Home'
import arr from './User'

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            password: "",
            isUserLogIn: false,
            errorMsg: '',
        }
        this.logindetails = this.logindetails.bind(this);
        this.logoutclick = this.logoutclick.bind(this);
    }


    logindetails(name, password) {
        function findname(arr) {
            return ((arr.name === name) && (arr.password === password));
        }

        if (arr.find(findname)) {
            this.setState({
                name,
                password,
                isUserLogIn: true,
            })
        }
        else {
            this.setState({
                errorMsg: 'You have entered wrong username or password.'
            })
        }
    }

    logoutclick() {
        this.setState({
            isUserLogIn: false,
        })
    }

    render() {
        return (
            <Router>
                <div>

                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link to="/" className="navbar-brand"><b>T</b>est <b>A</b>pp</Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/">Home</Link></li>


                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {this.state.isUserLogIn ? <span/> :
                                    <li><Link to="/Login"><span className="glyphicon glyphicon-log-in"> </span>
                                        Login</Link></li>}

                                {this.state.isUserLogIn ?
                                    <li onClick={this.logoutclick}><Link to="/"><span
                                        className="glyphicon glyphicon-log-out"> </span>Logout</Link></li> :
                                    <span/>
                                }
                            </ul>
                        </div>
                    </nav>

                    <Route path="/Login" render={props => (
                        < Login{...props} logindetails={this.logindetails} errorMsg={this.state.errorMsg}/>)}/>
                    {this.state.isUserLogIn ? <Redirect to="/Todo"/> : null }

                    <Route path="/Todo" render={props => (<Todo{...props} name={this.state.name}/>)}/>

                    <Route exact path="/" component={Home}/>

                </div>
            </Router>
        )
    }
}

