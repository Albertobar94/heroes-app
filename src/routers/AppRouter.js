import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { Marvel } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/" component={ Marvel } />
                </Switch>
            </div>
        </Router>
    )
}
