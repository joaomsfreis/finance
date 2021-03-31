import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Login} from "./components/Login";
import {Home} from "./components/Home";
import {LoginProvider} from "./contexts/LoginProvider";
import RoutesPrivate from "./components/routes/RoutesPrivate";
import RoutesPublic from "./components/routes/RoutesPublic";

export default function Routes() {
    return (
        <BrowserRouter>
            <LoginProvider>
                <Switch>
                    <RoutesPublic path="/login" exact component={Login}/>
                    <RoutesPrivate path="/" component={Home}/>
                </Switch>
            </LoginProvider>
        </BrowserRouter>
    )
}
