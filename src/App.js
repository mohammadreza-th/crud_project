import "./App.css";
import Read from "./components/Read";
import Delete from "./components/Delete";
import Update from "./components/Update";
import Create from "./components/Create";
import { Children } from "react";

function App({ Children }) {
  return (
    <div className="App">
      <h2>CRUD</h2>
      <p>an app to create, read, update and delete contacts!</p>
      <div>{Children}</div>
    </div>
  );
}

export default App;
