import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../Components/Modal";
import { SpeakerCard } from "../Components/SpeakerCard";
import { MeetupContext } from "../Context/MeetupContext";
import { getDateAndTime } from "../utils";

export const MeetupDetails = () => {
  const [modal, setModal] = useState(false);
  const [rsvpBtnText, setRsvpBtnText] = useState("RSVP");
  const { meetupId } = useParams();
  const { state } = useContext(MeetupContext);
  const event = state?.meetups?.find((item) => item?.id === meetupId);

  const currDate = new Date();

  const isRegistrationOpen =
    currDate.getTime() < new Date(event?.eventEndTime)?.getTime();

  return (
    <div className="event-details-page">
      <div>
        <div>
          <h1>{event?.title}</h1>
          <p>
            Hosted By:{" "}
            <span style={{ fontWeight: "bold" }}>{event?.hostedBy}</span>
          </p>
        </div>
        <div className="event-image">
          <img src={event?.eventThumbnail} alt="event-icon" />
        </div>
        <div>
          <h3>Details:</h3>
          <article>{event?.eventDescription}</article>
        </div>
        <div>
          <h3>Additional Information:</h3>
          <p>
            <span style={{ fontWeight: "bold" }}>Dress Code: </span>
            {event?.additionalInformation?.dressCode}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Age Restrictions: </span>
            {event?.additionalInformation?.ageRestrictions}
          </p>
        </div>
        <div>
          <h3>Event Tags:</h3>
          {event?.eventTags?.map((item, index) => (
            <button
              key={index}
              style={{
                backgroundColor: "red",
                padding: "0.5rem",
                color: "white",
                margin: "0.5rem",
                border: "none",
                borderRadius: "5px"
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="timings-venue-card">
          <div>
            <p>
              <span style={{ fontWeight: "bold" }}>From: </span>
              {getDateAndTime(event?.eventStartTime)}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>To: </span>
              {getDateAndTime(event?.eventEndTime)}
            </p>
          </div>
          <div>
            <p>
              <span style={{ fontWeight: "bold" }}>Where: </span>
              {event?.location}
            </p>
            <p>{event?.address}</p>
          </div>
          {event?.isPaid && (
            <div>
              <span style={{ fontWeight: "bold" }}>Price: </span>
              Rs. {event?.price}
            </div>
          )}
        </div>

        <div>
          <h2>Speakers ({event?.speakers?.length}):</h2>
          <div style={{ display: "flex" }}>
            {event?.speakers?.map((speaker) => (
              <SpeakerCard key={speaker?.name} speaker={speaker} />
            ))}
          </div>
        </div>
        {isRegistrationOpen ? (
          <button
            onClick={() => setModal(true)}
            style={{
              backgroundColor: "red",
              padding: "0.5rem",
              color: "white",
              margin: "0.5rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {rsvpBtnText}
          </button>
        ) : (
          <h4>Registraions are closed !</h4>
        )}
        {modal && (
          <Modal
            event={event}
            setModal={setModal}
            setRsvpBtnText={setRsvpBtnText}
          />
        )}
      </div>
    </div>
  );
};
