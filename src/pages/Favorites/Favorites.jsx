import AdvertsGallery from "../../components/AdvertsGallery/AdvertsGallery";
import css from "./Favorites.module.css";

const Favorites = () => {
  const favoriteAdverts =
    JSON.parse(window.localStorage.getItem("favorite")) || [];

  return (
    <section className={css.sectionContainer}>
      <AdvertsGallery adverts={favoriteAdverts} />
    </section>
  );
};

export default Favorites;
