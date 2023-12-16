import React from 'react';

const FoodCard = ({item}) => {
    const { image, name, recipe, price, _id } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <div className="btn btn-outline">Add to Cart</div>
    </div>
  </div>
</div>
    );
};

export default FoodCard;