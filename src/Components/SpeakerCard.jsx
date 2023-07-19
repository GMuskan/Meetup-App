export const SpeakerCard = ({ speaker }) => {
  return (
    <div className="speaker-card">
      <img src={speaker?.image} alt="speaker-cover" />
      <div>
        <p>{speaker?.name}</p>
        <p style={{ fontWeight: "bold" }}>{speaker?.designation}</p>
      </div>
    </div>
  );
};
