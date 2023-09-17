import { useEffect, useState } from "react";
import { fetchAllCars } from "../../Api-service/Api-service";
import css from "../Catalog/Catalog.module.css";
import AdvertsGallery from "../../components/AdvertsGallery/AdvertsGallery";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadButton, setShowLoadButton] = useState(true);

  const fetchCars = async (page) => {
    const cars = await fetchAllCars(page);
    setAdverts([...adverts, ...cars]);
    setShowLoadButton(true);
    if (adverts.length >= 32) setShowLoadButton(false);
  };

  useEffect(() => {
    fetchCars(page);
  }, [page]);

  return (
    <section className={css.sectionContainer}>
      <AdvertsGallery adverts={adverts} />
      {showLoadButton && (
        <button onClick={() => setPage(page + 1)} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </section>
  );
};

export default Catalog;
