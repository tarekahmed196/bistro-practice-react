import { useLoaderData, useParams } from "react-router-dom";

const TabDynamic = () => {
  const details = useLoaderData();

  const { id } = useParams();
  const detail = details.filter((detail) => detail._id === id);
  const { _id, name, image, recipe, price } = detail[0];
  console.log("detail", detail);

  return (
    <div>
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
        </div>
      </div>
    </div>
  );
};

export default TabDynamic;
