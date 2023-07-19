import { useNavigate } from "react-router-dom";
import { getDateAndTime } from "../utils";

export const EventCard = ({ event }) => {
  const navigate = useNavigate();
  return (
    <div className="meetup-card" onClick={() => navigate(`/${event?.id}`)}>
      <img src={event?.eventThumbnail} alt="meetup-thumbnail" />
      <div className="event-details">
        <p>{getDateAndTime(event?.eventStartTime)}</p>
        <p className="event-title">{event?.title}</p>
      </div>
    </div>
  );
};
