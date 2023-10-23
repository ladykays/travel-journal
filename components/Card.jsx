import PropTypes from "prop-types";
import Marker from "../public/images/marker.svg";

export default function Card(props) {
  return (
    <>
      <div className="cardItem d-flex flex-row justify-content-center">
        <img
          src={props.cardItem.imageUrl}
          alt={props.cardItem.alt}
          className="cardItem--photo"
        />
        <div className="cardItem--info-container">
          <div className="location-grp d-flex align-items-center">
            <img src={Marker} alt="location marker" className="location-marker" />
            <p className="cardItem--info-location">{props.cardItem.location}</p>
            <p className="cardItem--info-mapLink">
              <a href={props.cardItem.googleMapsUrl}>View on Google Maps</a>
            </p>
          </div>
          <h2 className="cardItem--title">{props.cardItem.title}</h2>
          <p className="cardItem--date">
            {props.cardItem.startDate} - {props.cardItem.endDate}
          </p>
          <p className="cardItem--description">{props.cardItem.description}</p>
        </div>
      </div> 
      <hr />
    </>
  );
}

Card.propTypes = {
  cardItem: PropTypes.shape({
    imageUrl: PropTypes.string,
    alt: PropTypes.string,
    location: PropTypes.string,
    googleMapsUrl: PropTypes.string,
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
  }),
}
