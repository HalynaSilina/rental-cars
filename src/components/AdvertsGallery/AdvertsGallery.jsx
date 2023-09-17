import { useState } from "react";
import { createPortal } from "react-dom";
import css from "./AdvertsGallery.module.css";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
import Modal from "../../components/Modal/Modal";

const AdvertsGallery = ({ adverts }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const handleLearnMoreClick = (id) => {
    setShowModal(true);
    setActiveId(id);
  };
  return (
    <>
      <ul className={css.advertsGallery}>
        {adverts.length > 0 &&
          adverts.map((item) => (
            <AdvertItem
              key={`Id${item.id}`}
              advert={item}
              onClick={()=>handleLearnMoreClick(item.id)}
            />
          ))}
      </ul>
      {showModal && <Modal carId={activeId} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default AdvertsGallery;
