import React from 'react'
import { CartState } from '../../Context/Context'
import Filters from '../Filters';
import SingleProduct from '../SingleProduct';

const Home = () => {
  // destructuring itemucts from state to integrate here
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
  console.log("products", products)

  const transformProducts = () => {
    let updatedProducts = products;

    if (sort) {
      updatedProducts = updatedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      updatedProducts = updatedProducts.filter((item) => item.inStock);
    }

    if (byFastDelivery) {
      updatedProducts = updatedProducts.filter((item) => item.fastDelivery);
    }

    if (byRating) {
      updatedProducts = updatedProducts.filter(
        (item) => item.ratings >= byRating
      );
    }

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return updatedProducts;
  };

  return (
    <>
      <div className='home'>
        <Filters />
        <div className='itemuctContainer'>
          {transformProducts().map((item) => (
            <SingleProduct item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home