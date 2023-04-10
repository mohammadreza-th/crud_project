import "./App.css";
import Read from "./components/Read";
import Delete from "./components/Delete";
import Update from "./components/Update";
import Create from "./components/Create";

function App({ children }) {
  return (
    <>
      <div className="container">
        <a href="./create">create</a>
        <a href="./delete">delete</a>
        <a href="./update">update</a>
        <a href="./read">read</a>
      </div>
      <div className="App">
        <h2>CRUD</h2>
        <p>an app to create, read, update and delete contacts!</p>
        <div>{children}</div>
      </div>
    </>
  );
}

export default App;
