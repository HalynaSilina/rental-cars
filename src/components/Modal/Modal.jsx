const Modal = ({
  img,
  make,
  model,
  type,
  id,
  year,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  functionalities,
  rentalConditions,
}) => {
  const additionals = [...accessories, ...functionalities];
  const conditions = rentalConditions.split("/n");
  return (
    <div>
      <button type="button">Close</button>
      <img src={img} alt={`${make} ${model}`} />
      <h2>
        {make} <span>{model}</span>
      </h2>
      <ul>
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
        <li>
          <p>Fuel Consumption: {fuelConsumption}</p>
        </li>
        <li>
          <p>Engine Size: {engineSize}</p>
        </li>
      </ul>
      <p>{description}</p>
      <h3>Accessories and functionalities:</h3>
      <ul>
        {additionals.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <h3>Rental Conditions: </h3>
      <ul>
        {" "}
        {conditions.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
