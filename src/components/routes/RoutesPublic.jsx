import { useContext } from 'react';
import {Route, Redirect} from "react-router-dom";
import {LoginContext} from "../../contexts/LoginProvider";

const RoutesPublic = ({component: Component, ...rest}) => {
    const { hasToken } = useContext(LoginContext);

    return (
        <Route {...rest}
               render={() => hasToken
                   ? <Redirect to={'/'}/>
                   : <Component {...rest}/>
               }
        />
    )
}

export default RoutesPublic;