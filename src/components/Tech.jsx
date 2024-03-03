import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

function Tech() {
  const openPdf = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <>
      <p className={styles.sectionSubText}>Lit Sub-Council Magazine</p>
      <h2 className={styles.sectionHeadText}>
        <span className="select-none">Magazine</span>
      </h2>
      <div>
        <table className="mt-5 w-full " style={{ borderCollapse: "collapse" }}>
          <tr>
            <td style={cellStyle} className="text-teal-400">
              2021-2022
            </td>
            <td style={cellStyle} className="text-teal-400">
              2022-2023
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <a
                href="https://www.canva.com/design/DAFzsAylWLk/4e03_Iz-oKXN80ksaMn-Zg/view?utm_content=DAFzsAylWLk&utm_campaign=designshare&utm_medium=link&utm_source=editor#1"
                target="_blank"
                className="hover:text-blue-600"
              >
                <button className="bg-purple-500 p-2 rounded-lg hover:bg-purple-800 text-white">
                  Magazine Link
                </button>
              </a>
            </td>
            <td style={cellStyle} className="" target="_blank">
              <a target="_blank" className=" text-slate-700 ">
                <button className="text-slate-700 cursor-default">
                  Magazine Link
                </button>
              </a>
            </td>
          </tr>
        </table>
      </div>

      <div>
        <h2 className="sm:text-3xl lg:text-5xl mt-20">
          <span className="select-none">Summary</span>
        </h2>
        <table className="mt-5 w-full " style={{ borderCollapse: "collapse" }}>
          <tr>
            <td style={cellStyle} className="text-teal-400">
              Session
            </td>
            <td style={cellStyle} className="text-teal-400">
              Convener
            </td>
            <td style={cellStyle} className="text-teal-400">
              Secretary
            </td>
            <td style={cellStyle} className="text-teal-400" id="summary1">
              Summary
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>2022-2023</td>
            <td style={cellStyle}>Ms. Shivani Koshtha</td>
            <td style={cellStyle}>Aryan Shukla</td>
            <td style={cellStyle} id="summary1">
              <button
                className="bg-purple-500 p-2 rounded-lg hover:bg-purple-800"
                onClick={() => openPdf("./lit summary 2023-24.pdf")}
              >
                Summary
              </button>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>2023-2024</td>
            <td style={cellStyle}>Ms. Shivani Koshtha</td>
            <td style={cellStyle}>Anjali Bind & Suraj Tripathi</td>
            <td style={cellStyle} id="summary2">
              <button
                className="bg-purple-500 p-2 rounded-lg hover:bg-purple-800"
                onClick={() =>
                  openPdf("./Literary Sub Council Summary 17 april.pdf")
                }
              >
                Summary
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

export default SectionWrapper(Tech, "tech");
