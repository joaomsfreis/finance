import {createContext, useState, useEffect} from 'react';
import api from '../services/api';
import Cookies from 'js-cookie';

export const LoginContext = createContext({})

export const LoginProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [userID, setUserID] = useState(null);
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const currentToken = Cookies.get('token');
        const currentID = Cookies.get('user_id');

        setToken(currentToken ?? null);
        setUserID(currentID ?? null);
    }, []);

    useEffect(() => {
        api.post('users/auth', {token}).then(response => {
            setHasToken(true);
        }).catch(err => {
            setHasToken(false);
        })
    }, [token, userID]);

    const updateState = (token, userID) => {
        setToken(token);
        setUserID(userID);

        Cookies.set('token', token, { expires: 1/24 });
        Cookies.set('user_id', userID, { expires: 1/24 });
    }


    return (
        <LoginContext.Provider value={{
            token,
            userID,
            hasToken,
            updateState,

        }}>
            {children}
        </LoginContext.Provider>
    );
}
