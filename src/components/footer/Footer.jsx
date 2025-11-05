import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as Config from "./../../constants/Config";

import "./footer.scss";
import bg from "./../../assets/footer-bg.jpg";
import logo from "./../../assets/logo.png";

// Définit le chemin de base une seule fois pour la concision
const HOME = `/${Config.HOME_PAGE}`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    // Utilisation des template literals pour le style background
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        {/* Logo Section */}
        <div className="footer__content__logo">
          <div className="logo">
            {/* Logo */}
            <img
              src={logo}
              alt="logo"
              style={{ width: "150px", margin: "-10px" }}
            />
          </div>
        </div>

        {/* Liens de navigation */}
        <div className="footer__content__menus">
          {/* Menu 1: Général et Statique */}
          <div className="footer__content__menu">
            <Link to="/">{t("Home")}</Link>
            <Link to={`${Config.HOME_PAGE}/contact`}>{t("Contact us")}</Link>
            <Link to={`${Config.HOME_PAGE}/terms`}>{t("Term of service")}</Link>
            <Link to={`${Config.HOME_PAGE}/about`}>{t("About us")}</Link>
          </div>

          {/* Menu 2: Informations et Extras */}
          <div className="footer__content__menu">
            <Link to="/">{t("Live")}</Link>
            <Link to={`${Config.HOME_PAGE}/faq`}>{t("FAQ")}</Link>
            <Link to="/">{t("Premium")}</Link>
            <Link to={`${Config.HOME_PAGE}/privacy`}>
              {t("Privacy policy")}
            </Link>
          </div>

          {/* Menu 3: Découverte et Listes */}
          <div className="footer__content__menu">
            <Link to="/">{t("You must watch")}</Link>
            <Link to="/">{t("Recent release")}</Link>
            <Link to="/">{t("Top IMDB")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
