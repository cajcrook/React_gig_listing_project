// import "./Gig.css";
// import { useState } from "react";
import Favourite from "./Favourite.jsx"


const Gig = (props) => {
    return (
        <div className="gig">
            <h5 className="band_name">{props.band_name}</h5>
            <p className="event_description">{props.event_description}</p>
            <p className="time_date">{props.time_date}</p>
            <p className="location">{props.location}</p>
            <Favourite />
        </div>
    );
};

export default Gig;


  