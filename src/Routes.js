import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Confirm from './components/auth/Confirm'
import Forgetpassword from './components/auth/Forgetpassword'
import PrivateRoute from './components/auth/PrivateRoute'
import Resetpassword from './components/auth/Resetpassword'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import UserDashboard from './components/auth/UserDashboard'
import Home from './components/Home'
const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    {/* to confirm email */}
                    <Route exact path="/email/confirmation/:token" component={Confirm} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/forgetpassword" component={Forgetpassword} />
                    <Route exact path="/resetpassword" component={Resetpassword} />
                    <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes
