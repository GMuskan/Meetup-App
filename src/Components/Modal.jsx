export const Modal = ({ event, setModal, setRsvpBtnText }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <h1>Complete your RSVP</h1>
          <p>Fill in your personal Information</p>
        </div>
        <div className="modal-input">
          <div>
            <label>Name:</label>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="modal-input">
          <div>
            <label>Email:</label>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        {event?.isPaid && "* You have to make the payment at the venue"}
        <div className="modal-btn">
          <button
            onClick={() => {
              setModal(false);
              setRsvpBtnText("RSVPed");
            }}
          >
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
};
