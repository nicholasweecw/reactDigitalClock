import logo from "./logo.svg";
import "./App.css";
import Clock from "./Components/Clock";

function App() {
  const date = new Date();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const day =
    days[`${date.getDay() - 1}`] +
    " " +
    date.getDate() +
    "/" +
    `${date.getMonth() + 1}` +
    "/" +
    date.getFullYear();
  /*const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); */

  return (
    <div className="App">
      <h1>Clock App</h1>
      <h2>{day}</h2>
      <Clock></Clock>
    </div>
  );
}

export default App;
