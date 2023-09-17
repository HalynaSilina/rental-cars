export function getAddress(address) {
  const info = address.split(", ");
  const city = info[1];
  const country = info[2];
  return { city, country };
}

export function getAccessories(accessories) {
  return accessories[0];
}

export function getMileage (mileage) {
  return mileage.toLocaleString("en-US");
}

export function getConditions (rentalConditions) {
  return rentalConditions.split("\n")
}