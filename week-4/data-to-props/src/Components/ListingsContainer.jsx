import Listing from "./Listing"; //importing single listing component
export default function ListingsContainer({ items }) {
  return (
    <div className="listingsContainer">
      {
        //Takes every item and assigns a Listing to it in a list
        items.map((item) => (
          <Listing key={item.id} {...item} />
        ))
      }
    </div>
  );

  /*    INCORRECT WAY TO DO THIS
  let listings = []; //empty array to store all new listings with data
  items.forEach((item) => {
    listings.push(
      <Listing
        pic={item.pic}
        country={item.country}
        location={item.location}
        price={item.price}
        rating={item.rating}
      />
    );
  });

  return <div class="listingsContainer">{listings}</div>; */ //return all new listings after filling out the data
}
