import FavButton from "../FavButton/FavButton";
import Button from "../Button/Button";

const AdvertItem = ({
  img,
  make,
  model,
  type,
  year,
  rentalPrice,
  city,
  country,
  rentalCompany,
  mileage,
  status = "Premium",
  accessories,
}) => {
  return (
    <li>
      <div>
        <img src={img} alt={`${make} ${model}`} />
        <FavButton />
      </div>
      <div>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </div>
      <ul>
        <li>
          <p>{city}</p>
        </li>
        <li>
          <p>{country}</p>
        </li>
        <li>
          <p>{rentalCompany}</p>
        </li>
        <li>
          <p>{status}</p>
        </li>
        <li>
          <p>{type}</p>
        </li>
        <li>
          <p>{model}</p>
        </li>
        <li>
          <p>{mileage}</p>
        </li>
        <li>
          <p>{accessories}</p>
        </li>
      </ul>
      <Button text="Learn more" />
    </li>
  );
};

export default AdvertItem;
