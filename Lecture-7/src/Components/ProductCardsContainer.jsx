import ProductCard from "./ProductCard";

export default function ProductCardsContainer({ data, productQuantity, handleOnChangePrice, handleAddQuantity, handleRemoveQuantity }) {
  return (
    <div className="ProductCardsContainer">
      {data.map((product) => (
        <ProductCard 
          key={product.id} 
          {...product} 
          productQuantity={productQuantity.find((prod) => prod.id == product.id)} 
          handleOnChangePrice={handleOnChangePrice}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
        />
      ))}
    </div>
  );
}
