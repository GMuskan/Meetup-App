import { useContext } from "react";
import { MeetupContext } from "../Context/MeetupContext";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import { getDateAndTime } from "../utils";
import { EventCard } from "../Components/EventCard";
export const Home = () => {
  const navigate = useNavigate();
  const { dispatch, searchedData } = useContext(MeetupContext);

  return (
    <div className="home-container">
      <nav>
        <h1>Meetup</h1>
        <input
          type="text"
          placeholder="Search by title and type"
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH", payload: e.target.value })
          }
        />
      </nav>
      <main>
        <div className="header">
          <h1>Meetup Events</h1>
          <select
            onChange={(e) =>
              dispatch({ type: "SET_FILTER", payload: e.target.value })
            }
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <div className="meetups">
          {searchedData?.map((item) => (
            <EventCard key={item?.id} event={item} />
          ))}
        </div>
      </main>
    </div>
  );
};
