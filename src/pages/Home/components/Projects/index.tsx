import React from "react";
import assets from "assets";
import { classNames } from "helpers/functions";
import { projectItems, prototypeProjectItems } from "constants/common";
import styles from "./Projects.scss";

const Projects: React.FC = () => {
  const handleProjectItemOnClick = (url: string) => () => window.open(url);

  return (
    <div id={"projectsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>{"Projects"}</span>
        </div>
        <div className={styles.projectsListWrapper}>
          <div className={styles.projectsListContainer}>
            <div>
              <img src={assets.live} alt={"Live Projects"} />
              <span>Live Projects</span>
            </div>
            <div>
              {projectItems.map((item) => {
                return (
                  <div
                    className={classNames(styles.projectBG, item.color)}
                    style={{
                      background: `url(${item.bgImg}) center center / cover no-repeat`,
                    }}
                    onClick={handleProjectItemOnClick(item.url)}
                  >
                    <div>
                      <div>{item.name}</div>
                      <hr />
                      <div>{item.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.projectsListContainer}>
            <div>
              <img src={assets.prototype} alt={"Prototype Projects"} />
              <span>Prototype Projects</span>
            </div>
            {prototypeProjectItems.map((item) => {
              return (
                <div
                  className={classNames(styles.projectBG, item.color)}
                  style={{
                    background: `url(${item.bgImg}) center center / cover no-repeat`,
                  }}
                  onClick={handleProjectItemOnClick(item.url)}
                >
                  <div>
                    <div>{item.name}</div>
                    <hr />
                    <div>{item.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
