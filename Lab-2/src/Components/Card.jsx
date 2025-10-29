export default function Card({pic, location, resort , rating, price}) {
    return <div class="listing">
          <img src={pic} alt="" width="150px" />
          <div class="details">
            <h3 class="location">{location}</h3>
            <p class="resort">{resort}</p>
            {rating > 4.0 ? (
              <p class="high-rating">{rating} ★</p>
            ) : (
              <p class="low-rating">{rating} ★</p>
            )}
            <p class="price">${price}/night</p>
          </div>
        </div>
}