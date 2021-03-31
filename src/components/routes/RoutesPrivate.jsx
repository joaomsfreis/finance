import { useContext } from 'react';
import {Route, Redirect} from "react-router-dom";
import {LoginContext} from "../../contexts/LoginProvider";

const RoutesPrivate = ({component: Component, ...rest}) => {
    const { hasToken } = useContext(LoginContext);

    return (
        <Route {...rest}
               render={() => hasToken
                   ? <Component {...rest}/>
                   : <Redirect to={'/login'}/>
               }
        />
    )
}

export default RoutesPrivate;