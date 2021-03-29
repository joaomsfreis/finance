import {createContext, useState} from 'react';

export  const LoginContext = createContext({})

export const LoginProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [userID, setUserID] = useState(null);

    return (
        <LoginContext.Provider value={{
            token,
            userID,
        }}>
            {children}
        </LoginContext.Provider>
    );
}
