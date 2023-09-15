function getAddress (address) {
    const info= address.split(", ")
    const city = info[1];
    const country = info[2];
    return {city, country}
}

export default getAddress;