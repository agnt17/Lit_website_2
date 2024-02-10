import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
          {/* <StarsCanvas/> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <StarsCanvas/>
        <About/>
        <Feedbacks/>{/* this is events file*/}
        <Experience/>{/* this is teams file*/}
        {/* <Tech/>  this could be used as merchandise*/}
        {/* <Works/> */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/> 
        </div> 
      </div>
    </BrowserRouter>
  );
};

export default App;
