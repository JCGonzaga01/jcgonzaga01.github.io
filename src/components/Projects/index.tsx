import React from "react";
import { projectDetails } from "constants/project";
import { useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Projects.scss";

const Projects: React.FC = () => {
  return (
    <div id={"projectsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>{projectDetails.title}</div>
        <div className={styles.projectsListWrapper}>
          {projectDetails.details.map((project) => {
            const isElementVisible = useVisibleInViewport(project.elementId, 400);
            return (
              <div
                key={project.elementId}
                id={project.elementId}
                className={styles.projectsListContainer}
              >
                <div>
                  <img src={project.icon} alt={project.name} />
                  <span>{project.name}</span>
                </div>
                <div className={styles.projectItems}>
                  {project.items.map((item, idx) => (
                    <a
                      href={item.url}
                      target={item.target}
                      rel={"noreferrer"}
                      key={`${idx}-${item.name}`}
                      className={classNames(
                        isElementVisible ? styles.projectBG : styles.hideDiv,
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
