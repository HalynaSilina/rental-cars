import heart from "../../assets/heart.svg";
import filledHeart from "../../assets/filled-heart.svg";
import useLocalStorage from "../../hooks/useLocaleStorage";
import css from "./FavButton.module.css";

const FavButton = ({ advert }) => {
  const [favorite, setFavorite] = useLocalStorage("favorite", []);
  const isFavorite = favorite.find((item) => item.id === advert.id)
    ? true
    : false;
  const toggleFavorite = () => {
    if (!isFavorite) setFavorite([...favorite, advert]);
    else {
      const newFavorites = favorite.filter((item) => item.id !== advert.id);
      setFavorite(newFavorites);
    }
  };
  return (
    <button type="button" onClick={toggleFavorite} className={css.favsButton}>
      <img src={isFavorite ? filledHeart : heart} width={18} height={18} />
    </button>
  );
};

export default FavButton;
