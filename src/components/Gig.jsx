import "./Gig.css";

const Gig = (props) => {
    return (
        <div className="gig">
            <h3 className="band_name">{props.band_name}</h3>
            <p className="event_description">{props.event_description}</p>
            <p className="time_date">{props.time_date}</p>
            <p className="location">{props.location}</p>
        </div>
    );
};

export default Gig;


  