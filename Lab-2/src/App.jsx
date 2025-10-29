import "./App.css";
import Card from "./Components/Card";

function App() {
  const ratings = [4.8, 4.2, 3.5, 4.1, 4.9, 3.2];
  return (
    <>
      <div>
        <h1 class="title">
          <b>Resorts Lite</b>
        </h1>
        <hr/>
        <Card pic={"./src/assets/images/1.jpg"} location={"Indonesia"} resort={"Gili Air Hotel"} rating={ratings[0]} price={589} />
        <Card pic={"./src/assets/images/2.jpg"} location={"Seychelles"} resort={"Hilton Resort"} rating={ratings[1]} price={629} />
        <Card pic={"./src/assets/images/3.jpg"} location={"US Virgin Islands"} resort={"Goa Resort"} rating={ratings[2]} price={485} />
        <Card pic={"./src/assets/images/4.jpg"} location={"Bahamas"} resort={"Kuredu Resort"} rating={ratings[3]} price={729} />
        <Card pic={"./src/assets/images/5.jpg"} location={"Mauritius"} resort={"Trou D'eau Douce"} rating={ratings[4]} price={877} />
        <Card pic={"./src/assets/images/6.jpg"} location={"Bermuda"} resort={"Staniel Cay Hotel"} rating={ratings[5]} price={365} />
      </div>
    </>
  );
}

export default App;
