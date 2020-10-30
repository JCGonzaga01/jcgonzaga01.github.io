import React from "react";
import styles from "./SkillGauge.scss";

type Props = {
  title: string;
  score: number;
};

const SkillGauge: React.FC<Props> = ({ title, score }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span>{title}</span>
        <span>{`${score}/5`}</span>
      </div>
      <div />
    </div>
  );
};

export default SkillGauge;
