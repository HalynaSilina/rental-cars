import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCarById } from "../../Api-service/Api-service";
import {
  getAddress,
  getConditions,
  getMileage,
} from "../../utils/getAdditionalInfo";
import close from "../../assets/close.svg";
import css from "./Modal.module.css";

const Modal = ({ carId, onClose }) => {
  const [advert, setAdvert] = useState(null);

  const fetchCar = async (id) => {
    const car = await fetchCarById(id);
    setAdvert(car);
  };

  useEffect(() => {
    fetchCar(carId);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleClick);
    };
  });

  const handleClick = (evt) => {
    if (evt.code === "Escape") onClose();
  };
  const onBackdropClickClose = (e) => {
    if (e.currentTarget === e.target) onClose();
  };

  if (advert) {
    const {
      img,
      make,
      model,
      address,
      id,
      year,
      type,
      fuelConsumption,
      engineSize,
      description,
      accessories,
      functionalities,
      rentalConditions,
      mileage,
      rentalPrice,
    } = advert;
    const { city, country } = getAddress(address);
    const formatedMileage = getMileage(mileage);
    const conditions = getConditions(rentalConditions);
    console.log(conditions);
    return (
      <div className={css.overlay} onClick={onBackdropClickClose}>
        {advert.length !== 0 && (
          <article className={css.modal}>
            <button type="button" onClick={onClose} className={css.closeButton}>
            <img src={close} width={24} height={24}/>
            </button>
            <img
              src={img}
              alt={`${make} ${model}`}
              width={461}
              height={248}
              className={css.advertImage}
            />
            <h2 className={css.advertTitle}>
              {make} <span className={css.titleAccent}>{model}</span>, {year}
            </h2>
            <ul className={css.info}>
              <li>
                <p>{city}</p>
              </li>
              <li>
                <p>{country}</p>
              </li>
              <li>
                <p>Id: {id}</p>
              </li>
              <li>
                <p>Year: {year}</p>
              </li>
              <li>
                <p>Type: {type}</p>
              </li>
            </ul>
            <ul className={css.info}>
              <li>
                <p>Fuel Consumption: {fuelConsumption}</p>
              </li>
              <li>
                <p>Engine Size: {engineSize}</p>
              </li>
            </ul>
            <p className={css.description}>{description}</p>
            <h3 className={css.additionalInfoTitle}>
              Accessories and functionalities:
            </h3>
            <ul className={css.additionalInfo}>
              {accessories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className={css.additionalInfo}>
              {functionalities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className={css.additionalInfoTitle}>Rental Conditions: </h3>
            <ul className={css.rentalInfo}>
              {conditions.map((item) => {
                if (item.includes(":")) {
                  return (
                    <li key={item}>
                      {item.split(":")[0]}:{" "}
                      <span className={css.accentText}>
                        {item.split(":")[1]}
                      </span>
                    </li>
                  );
                } else {
                  return <li key={item}>{item}</li>;
                }
              })}
              <li key={mileage}>
                Mileage:{" "}
                <span className={css.accentText}>{formatedMileage}</span>
              </li>
              <li key={rentalPrice}>
                Price: <span className={css.accentText}>{rentalPrice}</span>
              </li>
            </ul>
            <Link
              className={css.rentalButton}
              to="tel:+380730000000"
              target="blank"
            >
              Rental car
            </Link>
          </article>
        )}
      </div>
    );
  }
};

export default Modal;
