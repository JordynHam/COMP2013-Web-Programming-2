import "./App.css";
import ListingsContainer from "./Components/ListingsContainer";
import data from "./data/data";

function App() {
  let listing = data[0];
  return (
    <>
      <h2>Resorts Lite</h2>
      <ListingsContainer items={data} />
    </>
  );
}

export default App;
