import "./App.css";
import ColorBox from "./Components/ColorBox";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";
import colors from "./data/data";

function App() {
  return <>
    <ColorBoxesContainer colors={colors} />
  </>;
}

export default App;
