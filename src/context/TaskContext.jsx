import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Task"; //Importa los archivos en formato JSON del Task.js, se usa "as" para asignar un alias

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); //Creacion del useState para mostrar las tareas (Crea un arreglo vacío)

  //Creación de la funcón createTask para luego pasarla como promp en el return del TaskForm
  function createTask(newTask) {
    setTasks([
      ...tasks,
      {
        title: newTask.title,
        id: tasks.length,
        description: newTask.description,
      },
    ]);
  }

  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  //Creacion del useEffect para poder cargar los datos al cargar el componente
  useEffect(() => {
    setTasks(data); //Funcion del useState para actulizar la lista de tareas con los datos del JSON (Actualiiza el arreglo task del useState)
  }, []); //Cuando se cree el componente, ejecuta una vez la funcion "setTasks" del useState para actulizar la lista de tareas

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
