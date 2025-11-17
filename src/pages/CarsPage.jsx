import { useGetCarsQuery } from "../features/cars/carsApi";
import React from "react";
const CarsPage = () => {
  const { data, isLoading, error } = useGetCarsQuery();

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error!</h2>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cars List</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((car) => (
          <div
            key={car.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <img src={car.image} className="w-full h-40 object-cover" />
            <h2 className="font-bold">{car.title}</h2>
            <p className="text-sm text-gray-600">{car.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
