import React, { createContext, useContext } from 'react';

const CreateAppContext = createContext();

export default function GlobalPrivider({ children }) {

    const context = {

    };

    return (
        <CreateAppContext.Provider value={context} >
            {children}
        </CreateAppContext.Provider>
    );
};

export const useContexApp = () => useContext(CreateAppContext);
