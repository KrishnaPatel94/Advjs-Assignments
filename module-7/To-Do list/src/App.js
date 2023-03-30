import logo from "./logo.svg";
import "./App.css";
import Todo from "./Components/todo";
import { Provider } from "react-redux/es/exports";
import Store from "./Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Todo />
      </Provider>
    </>
  );
}

export default App;
