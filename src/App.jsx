import Gig from "./components/Gig";
import bandImage from "./assets/bandImage.jpg";
import "./App.css";
import InputLogger from "./components/InputLogger";



function App() {
  return (
    <>
    <img className="band" src={bandImage}></img>
      <Gig 
      band_name="The Rubber Bands"
      event_description="Big Band"
      time_date="Band O'Clock"
      location="Bandeville, Rubberton"
     />
     <Gig 
      event_description="2nd Big Band"
      time_date="5 past Band"
      location="Bandmouth, Rubbershire"
     />  
     <InputLogger />
    </>
  );
}

export default App;