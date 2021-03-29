import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Login} from "./components/Login";
import {Home} from "./components/Home";
import {LoginProvider} from "./contexts/LoginProvider";
import RoutesPrivate from "./components/routes/Private";

export default function Routes() {
    return (
        <BrowserRouter>
            <LoginProvider>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <RoutesPrivate path="/" component={Home}/>
                </Switch>
            </LoginProvider>
        </BrowserRouter>
    )
}
