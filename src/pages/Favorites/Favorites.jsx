import AdvertsGallery from "../../components/AdvertsGallery/AdvertsGallery";
import css from "./Favorites.module.css";

const Favorites = () => {
  const favorite = JSON.parse(window.localStorage.getItem("favorite")) || [];

  return (
    <section className={css.sectionContainer}>
      {favorite.length > 0 ? (
        <AdvertsGallery adverts={favorite} />
      ) : (
        <div className={css.noFavorites}>
          <h2>You add no cars in favorites yet</h2>
        </div>
      )}
    </section>
  );
};

export default Favorites;
