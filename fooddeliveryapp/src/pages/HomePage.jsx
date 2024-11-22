// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import styles from "./styles/homepage.module.css";
import HeaderDesktop from "../components/HeaderDesktop/HeaderDesktop";
const HomePage = () => {
  // const navigate = useNavigate();

  return (
    <section className={styles.homePage}>
      <header>
        <HeaderDesktop />
      </header>
      <div className={styles.navBar}>
        
      </div>
      <div className={styles.searchContainer}></div>
      <div className={styles.exclusiveDealsContainer}></div>
      <div className={styles.categoryContainer}></div>
      <div className={styles.popularRestaurants}></div>
      <div className={styles.adContainer}></div>
      <div className={styles.signUpContainer}></div>
      <div className={styles.aboutUsContainer}></div>
      <div className={styles.statisticsContainer}></div>
      <footer>{/* <FooterComponent /> */}</footer>
    </section>
  );
};

export default HomePage;
