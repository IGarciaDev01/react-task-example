import TaskList from "./components/TaskList.jsx"; //Importa el componente TaskList desde el archivo TaskList.jsx
import TaskForm from "./components/TaskForm.jsx";

//Componente de la App "MainFun" que retorna la TaskList
function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
