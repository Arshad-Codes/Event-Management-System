import React from "react";
import "../styles/EventDetail.css";

const EventDetail = ({ event, onClose }) => {
  if (!event) {
    // Render a fallback UI or return null
    return <div>Loading event details...</div>;
  }
  return (
    
    <div className="event-detail">
      <h2>Event Details</h2>
      <p>
        <strong>Name:</strong> {event.name}
      </p>
      <p>
        <strong>Description:</strong> {event.description}
      </p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <h3>Attendees</h3>
      <ul>
        {event.attendees.map((attendee, index) => (
          <li key={index}>{attendee}</li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EventDetail;
