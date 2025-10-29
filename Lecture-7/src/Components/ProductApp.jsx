import {useState} from "react";
import ProductCardsContainer from "./ProductCardsContainer";

export default function ProductApp({ data }) {
    const [productQuantity, setProductQuantity] = useState(data.map((prod) => {
       return {
        id: prod.id,
        quantity: prod.quantity,
        priceOptions: prod.priceOptions,
        currentPrice: prod.priceOptions[0],
       }
    }))

    const handleOnChangePrice = (productId, e) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === productId) {
                return {...prod, currentPrice:e.target.value}
            }
            return prod
        });
        setProductQuantity(newProductQuantity);
        return;
    }

    const handleAddQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) => {
            return prod.id === productId ? {...prod, quantity: prod.quantity + 1} : prod;
        })
        setProductQuantity(newProductQuantity);
        return;
    }

    const handleRemoveQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) => {
            return (prod.id === productId && prod.quantity > 0) ? {...prod, quantity: prod.quantity - 1} : prod;
        })
        setProductQuantity(newProductQuantity);
        return;
    }

    return <div>
        <ProductCardsContainer 
            data={data} 
            productQuantity={productQuantity} 
            handleOnChangePrice={handleOnChangePrice}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
        />
    </div>
}