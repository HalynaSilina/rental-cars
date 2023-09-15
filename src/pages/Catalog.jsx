import { useEffect, useState } from "react";
import fetchAllCars from "../Api-service/Api-service";
import getAddress from "../utils/getAddress";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  console.log(adverts);
  useEffect(() => {
    const cars = fetchAllCars();
    setAdverts(cars);
  }, [fetchAllCars]);
  return (
    <>
      <h2>Catalog</h2>
      <ul>
        {adverts.length !== 0 &&
          adverts.map(
            ({
              img,
              make,
              model,
              type,
              year,
              rentalPrice,
              address,
              rentalCompany,
              mileage,
              accessories,
            }) => {
              const {city, country} = getAddress(address);
              <AdvertItem
                img={img}
                make={make}
                model={model}
                type={type}
                year={year}
                rentalPrice={rentalPrice}
                city={city}
                country={country}
                rentalCompany={rentalCompany}
                mileage={mileage}
                accessories={accessories}
              />
            }
          )}
      </ul>
    </>
  );
};

export default Catalog;
