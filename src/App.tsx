import React, { useState } from "react";

import "./App.css";
type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}
function App(): JSX.Element {
  const [newtask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newtask);
    setNewTask("");
    console.log(Object);
  };

  const addTask = (name: string) => {
    const newTask: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTask);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                ##guarda los valores atraves de la funcion newtask
                <input
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newtask}
                  className="form-conmtrol"
                  autoFocus
                />
                <button className="btn btn-succes btn-block mt-2">
                  Guardar
                </button>
                <button className="btn btn-succes btn-block mt-2">
                  Guardar
                </button>
              </form>
            </div>
          </div>
          {tasks.map((t: ITask, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
                {t.name}
              </h2>
              <div>
                <button className="btn btn-secondary">
                  {t.done ? "c" : "X"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
