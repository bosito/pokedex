import { createContext, useContext, useState } from "react";

const authContext = createContext();

// Simular endpoints de un API
const fakeAuthProvider = {
    signIn: (callback) => {
        setTimeout(callback, 100);
    },
    signOut: (callback) => {
        setTimeout(callback, 100);
    },
};

/**
* este es un hook nuestro que controla si el usuario esta logiado o no
*/

const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const signIn = (cb) => {
        fakeAuthProvider.signIn(() => {
            setUser("user");
            cb();
        });
    };

    const signOut = (cb) => {
        fakeAuthProvider.signOut(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signIn,
        signOut,
    };
};

export const AuthProvider = ({ children }) => {
    // esto es un HOC o Componente de Orden Superior
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => useContext(authContext);