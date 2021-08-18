import React from "react";
import NavigationApp from "./navigation/NavigationApp";
import { AuthProvider } from "./core/context/AuthProvider";
import GlobalPrivider from "./core/context/GlobalPrivider";


/**
* la idea es que este archivo funcione como el encapsulador 
* de todos los Providers (para que no esten el en archivo index.js)
*/

export default function App() {
  return (
    <GlobalPrivider>
      <AuthProvider>
        <NavigationApp />
      </AuthProvider>
    </GlobalPrivider>
  );
};
