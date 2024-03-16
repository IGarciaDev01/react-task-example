import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; //Importa el componente "MainFun" desde el App.jsx
import "./index.css"; //Importa el archivo de estilos
import { TaskContextProvider } from "./context/TaskContext.jsx";

//Creación del root principal para procesar la App (Componente MainFun)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
