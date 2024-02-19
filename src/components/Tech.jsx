import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

function Tech() {
  return (
    <>
      <p className={styles.sectionSubText}>Lit Sub-Council Magazine</p>
      <h2 className={styles.sectionHeadText}>
        <span className="select-none">Magazine</span>
      </h2>
      <p className="text-xl text-teal-500 font-extralight">Coming Soon...</p>
    </>
  );
}

export default SectionWrapper(Tech, "tech");
