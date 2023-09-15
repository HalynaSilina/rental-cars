import { useEffect, useState } from "react";
import fetchAllCars from "../Api-service/Api-service";
import getAddress from "../utils/getAddress";
import AdvertItem from "../components/AdvertItem/AdvertItem";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllCars().then((res) => setAdverts(res));

    console.log(adverts);
  }, []);

  return (
    <>
      <h2>Catalog</h2>
      <ul>
        {adverts.length > 0 &&
          adverts.map(
            ({
              id,
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
              const { city, country } = getAddress(address);
              return (
                <AdvertItem
                  key={id}
                  id={id}
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
              );
            }
          )}
      </ul>
    </>
  );
};

export default Catalog;
