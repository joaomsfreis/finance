import { useContext } from 'react';
import {Route, Redirect} from "react-router-dom";
import {LoginContext} from "../../contexts/LoginProvider";

const RoutesPrivate = ({component: Component, ...rest}) => {
    const { token } = useContext(LoginContext);

    return (
        <Route {...rest}
               render={() => token
                   ? <Component {...rest}/>
                   : <Redirect to={'/login'}/>
               }
        />
    )
}

export default RoutesPrivate;