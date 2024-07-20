import { useState } from "react";
import React from "react";
import "../styles/EventList.css"; 
import axios from "axios";

const EventList = ({ events, onEdit, onDelete, onDetail }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [attendeeName, setAttendeeName] = useState("");
   const [currentEventId, setCurrentEventId] = useState(null);
   

   const handleAddAttendeeClick = (eventId) => {
     setIsModalOpen(true);
     setCurrentEventId(eventId);
   };
   const handleAddAttendee = async () => {
     if (attendeeName && currentEventId) {
       await axios.post(`http://localhost:8080/api/attendee/${currentEventId}`, {
         fullName: attendeeName,
       });
       setIsModalOpen(false); 
       setAttendeeName("");
       setCurrentEventId(null); 
     }
   };

       


  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.eventID} className="event-item">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <div className="event-actions">
            <button
              className="btn-secondary"
              onClick={() => onEdit(event, event.eventID)}
            >
              Edit
            </button>
            <button
              className="btn-danger"
              onClick={() => onDelete(event.eventID)}
            >
              Delete
            </button>
            <button
              className="btn-secondary"
              onClick={() => handleAddAttendeeClick(event.eventID)}
            >
              Add Attendee
            </button>
            <button className="btn-secondary" onClick={() => onDetail(event)}>
              View Details
            </button>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <div className="modal">
          <div className="event-form">
            <h2>Add Attendee</h2>
            <div className="form-group">
              <input
                type="text"
                value={attendeeName}
                onChange={(e) => setAttendeeName(e.target.value)}
                placeholder="Attendee Name"
              />
            </div>
            <div className="form-actions">
              <button className="btn-primary" onClick={handleAddAttendee}>
                Add Attendee
              </button>
              <button
                className="btn-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventList;
