import css from "./Home.module.css";

const Home = () => {
  return (
    <section className={css.sectionContainer}>
      <h1 className={css.mainTitle}>Rent & Ride</h1>
      <div className={css.about}>
        <h2 className={css.aboutTitle}>About us</h2>
        <p className={css.aboutText}>
          Our company specializes in providing unparalleled convenience and
          affordability to our customers. With a vast fleet of well-maintained
          vehicles and a user-friendly booking platform, we offer a seamless
          rental experience that sets us apart from the competition. Choose us
          for your next rental and discover why we're the preferred choice for
          travelers seeking quality and value.
        </p>
      </div>
    </section>
  );
};

export default Home;
