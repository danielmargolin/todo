import { useState } from "react";
import List from "../common/List/List";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const ShoppingList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Milk", isBought: false },
    { id: 2, name: "Cola", isBought: true },
    { id: 3, name: "IPhone", isBought: false },
  ]);

  const onToggle = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, isBought: !product.isBought };
      }
      return product;
    });
    setProducts(newProducts);
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <List
        items={products}
        onChange={setProducts}
        component={(props) => (
          <ShoppingItem onComplete={onToggle} {...props} />
        )}
      />
    </div>
  );
};
export default ShoppingList;
