import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//Crea un componente TaskForm para ingresar datos de una nueva tarea y le pasa como parametro la funcion createTask mediante un promp que viene del App.jsx
function TaskForm() {
  const [title, setTitle] = useState(""); //Creación del useState para actualizar los titulos de las tareas nuevas
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  //Función para manejar el evento Submit del Formulario
  const handleSubmit = (e) => {
    e.preventDefault(); //Detiene el envio del formulario para que no se actualice la pagina
    createTask({
      title,
      description,
    }); //Ejecuta la funcion para crear la nueva tarea pasandole como parametro el titulo
    setTitle("");
    setDescription("");
  };

  //Retorno del componente fomrulario
  return (
    // Creación del formulario, con el evento onSubmit, cuando se presiona el botón se ejecuta la funcion mara manejar el evento "handleSubmit"
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          //Creacion del imput con atributos y el evento onChange para poder caputar lo que typee el usuario en el input y lo asigne al titulo con la funcion sel useState
          type="text"
          placeholder="Escribe tu tarea"
          //Aqui se asigna el titulo pasandole como parametro lo que typee el usuario con "e.target.value"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus 
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
