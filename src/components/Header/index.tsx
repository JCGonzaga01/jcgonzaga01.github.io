import React, { useEffect, useState } from "react";
import assets from "assets";
import { menuItems } from "constants/_common";
import { classNames } from "helpers/functions";
import { useDeviceType } from "helpers/customHooks";
import styles from "./Header.scss";

const Header: React.FC = () => {
  const deviceType = useDeviceType();
  const [curDivViewPort, setCurDivViewPort] = useState("home");
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrolling = () => {
      setIsScrolled(window && window.scrollY > 200);
      let curviewPort = "home";
      menuItems.some((item, idx) => {
        const menuEl = document.getElementById(`${item.key}DivId`);
        if (menuEl && menuEl.getBoundingClientRect().top - 85 > 0) {
          curviewPort = menuItems[idx - 1].key;
          return true;
        } else {
          curviewPort = menuItems[idx].key;
        }
      });
      setCurDivViewPort(curviewPort);
    };
    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  const handleMenuToggle = () => setIsMenuToggle(!isMenuToggle);

  const handleOnClickMenu = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setIsMenuToggle(false);
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
              <div
                id={item.key}
                key={item.key}
                onClick={handleOnClickMenu}
                className={
                  curDivViewPort === item.key ? styles.selectedMenuScrolled : styles.defaultMenuList
                }
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={classNames(styles.container, isScrolled && styles.scrolled)}>
          <div className={styles.myName}>
            <a href={"/"} target={"_self"} rel={"noreferrer"}>
              <img src={assets.headerLogo} alt={"Header Logo"} />
            </a>
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
                <span
                  id={item.key}
                  key={item.key}
                  onClick={handleOnClickMenu}
                  className={
                    item.key === "home" && !isScrolled
                      ? styles.selectedMenuScrolled
                      : curDivViewPort === item.key
                      ? styles.selectedMenuDefault
                      : isScrolled
                      ? styles.scrolledMenuList
                      : styles.defaultMenuList
                  }
                >
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
