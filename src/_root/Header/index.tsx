import React, { useEffect, useState } from "react";
import { classNames } from "helpers/functions";
import { useDeviceType } from "helpers/customHooks";
import assets from "assets";
import { menuItems } from "constants/common";
import styles from "./Header.scss";

const Header: React.FC = () => {
  const deviceType = useDeviceType();
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerImg, setheaderImg] = useState(assets.jcgHeader);

  useEffect(() => {
    const isScrolled = () => setIsScrolled(window && window.scrollY > 200);
    window.addEventListener("scroll", isScrolled);

    return () => {
      window.removeEventListener("scroll", isScrolled);
    };
  }, []);

  const handleMenuToggle = () => setIsMenuToggle(!isMenuToggle);

  const headerHover = (isHover: boolean) => () =>
    setheaderImg(isHover ? assets.jcgHeaderHover : assets.jcgHeader);

  const handleOnClickMenu = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    handleMenuToggle();
    const key = e.currentTarget.id;

    const menuEl = document.getElementById(`${key}DivId`);
    if (menuEl) {
      const curOffset = menuEl.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: curOffset, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.wrapper}>
      {isMenuToggle && deviceType !== "pc" ? (
        <div className={styles.spMenuWrapper}>
          <div className={styles.spMenuClose} onClick={handleMenuToggle}>
            <span />
            <span />
          </div>
          <div className={styles.spMenuContainer} onClick={handleMenuToggle} />
          <div className={styles.spMenuList}>
            {menuItems.map((item) => (
              <div id={item.key} key={item.key} onClick={handleOnClickMenu}>
                {item.value}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={classNames(styles.container, isScrolled && styles.scrolled)}>
          <div className={styles.myName}>
            <img
              src={headerImg}
              alt={"John Christopher Gonzaga"}
              onMouseEnter={headerHover(true)}
              onMouseLeave={headerHover(false)}
            />
          </div>
          {deviceType !== "pc" ? (
            <div className={styles.menuContainer} onClick={handleMenuToggle}>
              <span className={styles.menuName}>Menu</span>
              <div className={styles.burgerMenu}>
                <span />
                <span />
                <span />
              </div>
            </div>
          ) : (
            <div
              className={classNames(
                styles.menuList,
                isScrolled ? styles.scrolledMenuList : styles.defaultMenuList
              )}
            >
              {menuItems.map((item) => (
                <span id={item.key} key={item.key} onClick={handleOnClickMenu}>
                  {item.value}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
