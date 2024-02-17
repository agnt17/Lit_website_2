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
      <div className="flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row bg-white bg-opacity-5 backdrop-blur-md rounded-lg text-center w-full md:w-5/6 lg:w-4/6 lg:h-auto sm:h-auto p-4 relative">
          <div className="flex-1 pb-4 lg:pb-0">
            {/* Top content */}
            Content
          </div>
          <div className="border-t border-white border-opacity-50 w-full lg:w-0 lg:border-none"></div>
          <div className="flex-1 pt-4">
            {/* Bottom content */}
            
            Content
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Tech, "tech");
