import FavButton from "../FavButton/FavButton";
import Button from "../Button/Button";
import { getAddress, getAccessories } from "../../utils/getAdditionalInfo";
import css from "./AdvertItem.module.css";

const AdvertItem = ({ advert, status = "Premium", onClick }) => {
  const {
    img,
    make,
    model,
    address,
    year,
    rentalCompany,
    rentalPrice,
    type,
    mileage,
    accessories,
  } = advert;
  const accessoriesList = getAccessories(accessories);
  const { city, country } = getAddress(address);
  return (
    <li>
      <div className={css.imageContainer}>
        <img
          src={img}
          alt={`${make} ${model}`}
          width="274px"
          height="268px"
          className={css.advertImage}
        />
        <FavButton advert={advert} />
      </div>
      <div className={css.titleContainer}>
        <h2 className={css.advertTitle}>
          {make} <span className={css.titleAccent}>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </div>
      <ul className={css.info}>
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
          <p>{accessoriesList}</p>
        </li>
      </ul>
      <Button
        text="Learn more"
        className={css.learnMoreBtn}
        onClick={onClick}
      />
    </li>
  );
};

export default AdvertItem;
