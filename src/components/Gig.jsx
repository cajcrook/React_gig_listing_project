// import "./Gig.css";
import { useState } from "react";

const Gig = (props) => {
    const [isFavourited, setIsFavourite] = useState(false);

    const toggleFavourite = () => {
        setIsFavourite(!isFavourited);
        // console.log(isFavourited)
    };

    return (
        <div className="gig">
            <h3 className="band_name">{props.band_name}</h3>
            <p className="event_description">{props.event_description}</p>
            <p className="time_date">{props.time_date}</p>
            <p className="location">{props.location}</p>
            <button onClick={toggleFavourite}> 
                {isFavourited ? 'Favourited' : 'Favourite ' + props.event_description}
                </button>
        </div>
    );
};

export default Gig;


  