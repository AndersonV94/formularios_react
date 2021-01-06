import React from "react";
import ReactDOM from "react-dom";

import App from "./Componentes/App";
import InicioSesion from "./Componentes/InicioSesion";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <InicioSesion />
  </React.StrictMode>,
  rootElement
);
/*
Ciclo de vida de los componentes
 1. En el contructor se definen los state 
 2. El render es llamado por cada cambio en los state

Los hooks
 Permiten utilizar los state sin nesecidad de una clase
  ejemplo:
    import React, { useState } from 'react';
    ...

    const [count, setCount] = useState(0);
      ...

      setCount es el metodo q modificará al state count,
      cambia de 0 al deseado, y podría sumerle 1 para
      ir incrementandolo
*/
