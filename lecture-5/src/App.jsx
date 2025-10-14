import "./App.css";
import ProductsCardContainer from "./Components/ProductCardsContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <ProductsCardContainer data={data} />
    </>
  );
}

export default App;
