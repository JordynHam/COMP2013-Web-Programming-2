import "./App.css";

function App() {
  const ratings = [4.8, 4.2, 3.5, 4.1, 4.9, 3.2];
  return (
    <>
      <div>
        <h1 class="title">
          <b>Resorts Lite</b>
        </h1>
        <b>
          <hr></hr>
        </b>
        <div class="listing">
          <img src="./src/assets/images/1.jpg" alt="" width="150px" />
          <div class="details">
            <h3 class="location">Indonesia</h3>
            <p class="resort">Gili Air Hotel</p>
            {ratings[0] > 4.0 ? (
              <p class="high-rating">{ratings[0]} ★</p>
            ) : (
              <p class="low-rating">{ratings[0]} ★</p>
            )}
            <p class="price">$589/night</p>
          </div>
        </div>
        <div class="listing">
          <img src="./src/assets/images/2.jpg" alt="" width="150px" />
          <div class="details">
            <h3 class="location">Seychelles</h3>
            <p class="resort">Hilton Resort</p>
            {ratings[1] > 4.0 ? (
              <p class="high-rating">{ratings[1]} ★</p>
            ) : (
              <p class="low-rating">{ratings[1]} ★</p>
            )}
            <p class="price">$629/night</p>
          </div>
        </div>
        <div class="listing">
          <img src="./src/assets/images/3.jpg" alt="" width="150px" />
          <div class="details">
            <h3 class="location">US Virgin Islands</h3>
            <p class="resort">Goa Resort</p>
            {ratings[2] > 4.0 ? (
              <p class="high-rating">{ratings[2]} ★</p>
            ) : (
              <p class="low-rating">{ratings[2]} ★</p>
            )}
            <p class="price">$485/night</p>
          </div>
        </div>
        <div class="listing">
          <img src="./src/assets/images/4.jpg" alt="" width="150px" />
          <div class="details">
            <h3 class="location">Bahamas</h3>
            <p class="resort">Kuredu Resort</p>
            {ratings[3] > 4.0 ? (
              <p class="high-rating">{ratings[3]} ★</p>
            ) : (
              <p class="low-rating">{ratings[3]} ★</p>
            )}
            <p class="price">$729/night</p>
          </div>
        </div>
        <div class="listing">
          <img src="./src/assets/images/5.jpg" alt="" width="150px" />
          <div class="details">
            <h3 class="location">Mauritius</h3>
            <p class="resort">Trou D'eau Douce</p>
            {ratings[4] > 4.0 ? (
              <p class="high-rating">{ratings[4]} ★</p>
            ) : (
              <p class="low-rating">{ratings[4]} ★</p>
            )}
            <p class="price">$877/night</p>
          </div>
        </div>
        <div class="listing">
          <img src="./src/assets/images/6.jpg" alt="" width="150px" />
          <div class="details">
            <h3 class="location">Bermuda</h3>
            <p class="resort">Staniel Cay Hotel</p>
            {ratings[5] > 4.0 ? (
              <p class="high-rating">{ratings[5]} ★</p>
            ) : (
              <p class="low-rating">{ratings[5]} ★</p>
            )}
            <p class="price">$365/night</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
