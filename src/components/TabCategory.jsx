import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'



const TabCategory = ({item}) => {
    const {_id, image, name,recipe, price} = item;
    console.log(item);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    
  </div>
  <div className="flex items-center justify-between mx-6">
    <p>Price: {price}</p>
    <Link to={`/tab-dynamic/${_id}`}><button className="btn btn-outline "><ShoppingBagIcon className="h-6 w-6 text-purple-500" />Buy Now</button></Link>
    
</div>
</div>
    );
};

export default TabCategory;