import React, { useEffect, useState } from "react";
import { classNames } from "helpers/functions";
import { useDeviceType } from "helpers/customHooks";
import styles from "./Header.scss";

const Header: React.FC = () => {
  const deviceType = useDeviceType();
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const isScrolled = () => setIsScrolled(window && window.scrollY > 200);
    window.addEventListener("scroll", isScrolled);

    return () => {
      window.removeEventListener("scroll", isScrolled);
    };
  }, []);

  const handleMenuToggle = () => setIsMenuToggle(!isMenuToggle);

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.container, isScrolled && styles.scrolled)}>
        <div className={styles.myName}>John Christopher Gonzaga</div>
        {deviceType !== "pc" ? (
          <div className={styles.menuContainer} onClick={handleMenuToggle}>
            <span className={styles.menuName}>Menu</span>
            <div className={classNames(styles.burgerMenu, isMenuToggle && styles.burgerMenuToggle)}>
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
            <span>About Me</span>
            <span>Skills</span>
            <span>Projects</span>
            <span>Work Experience</span>
            <span>Fun Stuffs</span>
            <span>Contact</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
