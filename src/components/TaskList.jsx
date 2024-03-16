import TaskCard from "./TaskCard"; //Importa el componente TaskLCard para mostrar los datos de las tareas
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//Función o componente TaskList que retorna la lista de tareas
function TaskList() {
  const { tasks } = useContext(TaskContext);

  //Validación por si no hay tareas en el "data" (JSON)
  if (tasks.length == 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>;
  }

  //Retorno por defecto si si hay tareas
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map(
        (
          task //Recorre las tareas y por cada elemetno realiza lo siguiente
        ) => (
          <TaskCard key={task.id} task={task} /> //Imprime el componente TaskCard pasandole como promp el task
        )
      )}
    </div>
  );
}

export default TaskList; //Exporta la funcion "Tasklist" por defecto
