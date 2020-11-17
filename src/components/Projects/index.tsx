import React from "react";
import assets from "assets";
import { liveProjectItems, prototypeProjectItems } from "constants/project";
import { useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Projects.scss";

const Projects: React.FC = () => {
  const isLPVisible = useVisibleInViewport("liveProjectsDivId", 400);
  const isPPVisible = useVisibleInViewport("prototypeProjectsDivId", 400);

  return (
    <div id={"projectsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>{"Projects"}</div>
        <div className={styles.projectsListWrapper}>
          <div id={"liveProjectsDivId"} className={styles.projectsListContainer}>
            <div>
              <img src={assets.live} alt={"Live Projects"} />
              <span>{"Live Projects"}</span>
            </div>
            <div>
              {liveProjectItems.map((item, idx) => (
                <a
                  href={item.url}
                  target={"_blank"}
                  key={`${idx}-${item.name}`}
                  className={classNames(
                    isLPVisible ? styles.projectBG : styles.hideDiv,
                    item.color
                  )}
                  style={{
                    background: `url(${item.bgImg}) center center / cover no-repeat`,
                    transition: `opacity 1s ease-in-out ${idx * 0.4}s`,
                  }}
                >
                  <div>
                    <div>{item.name}</div>
                    <hr />
                    <div>{item.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div id={"prototypeProjectsDivId"} className={styles.projectsListContainer}>
            <div>
              <img src={assets.prototype} alt={"Prototype Projects"} />
              <span>{"Prototype Projects"}</span>
            </div>
            {prototypeProjectItems.map((item, idx) => (
              <a
                href={item.url}
                target={"_blank"}
                key={`${idx}-${item.name}`}
                className={classNames(isPPVisible ? styles.projectBG : styles.hideDiv, item.color)}
                style={{
                  background: `url(${item.bgImg}) center center / cover no-repeat`,
                  transition: `opacity 1s ease-in-out ${idx * 0.5}s`,
                }}
              >
                <div>
                  <div>{item.name}</div>
                  <hr />
                  <div>{item.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
