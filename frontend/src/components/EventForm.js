import React, { useState, useEffect } from "react";
import "../styles/EventForm.css"; // Import the CSS file for styling

const EventForm = ({ event,eventid, onSave, onClose }) => {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
  });

  useEffect(() => {
    if (event) {
      setEventData({
        name: event.name,
        description: event.description,
        date: event.date,
        location: event.location,
      });
    } else {
      setEventData({
        name: "",
        description: "",
        date: "",
        location: "",
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(eventData,eventid);
    setEventData({
      name: "",
      description: "",
      date: "",
      location: "",
    });
    
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>{event ? "Edit Event" : "Create Event"}</h2>
      <div className="form-group">
        <label>Event Name:</label>
        <input
          type="text"
          name="name"
          value={eventData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={eventData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-actions">
        <button className="btn-primary" type="submit">
          Save
        </button>
        <button className="btn-secondary" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EventForm;
