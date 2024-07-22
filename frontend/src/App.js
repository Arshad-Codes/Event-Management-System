import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./styles/App.css"; 
import EventDetail from "./components/EventDetail";

const App = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [eventId, setEventId] = useState(null); 
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/event");
      setEvents(response.data);
    } catch (error) {
      console.error("There was an error fetching the events!", error);
    }
  };

  const onAttendeeAdded = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.eventID === updatedEvent.eventID ? updatedEvent : event
      )
    );
    if (currentEvent && currentEvent.eventID === updatedEvent.eventID) {
      setCurrentEvent(updatedEvent); 
    }
  };

  const handleAddEvent = async (event) => {
    try {
      await axios.post("http://localhost:8080/api/event", event);
      fetchEvents();
      setIsModalOpen(false);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleUpdateEvent = async (event ,eventId) => {
    try {
      await axios.put(`http://localhost:8080/api/event/${eventId}`, event);
      fetchEvents();
      setIsModalOpen(false);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8080/api/event/${eventId}`);
      fetchEvents();
    } catch (error) {
      console.error("There was an error deleting the event!", error);
    }
  };

  const openModal = (event = null, eventid) => {
    setEventId(eventid);
    setCurrentEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentEvent(null);
    setEventId(null);
  };

  const openDetailModal = (event) => {
    setCurrentEvent(event);
    setIsDetailModalOpen(true);
  }

  const closeDetailModal = () => {
    setCurrentEvent(null);
    setIsDetailModalOpen(false);
  }


  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Event Management System</h1>
        <button className="btn-primary" onClick={() => openModal()}>
          Add Event
        </button>
      </header>
      <EventList
        events={events}
        onEdit={openModal}
        onDelete={handleDeleteEvent}
        onDetail={openDetailModal}
        onAttendeeAdded={onAttendeeAdded}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Event Form"
        className="modal"
        overlayClassName="overlay"
      >
        <EventForm
          event={currentEvent}
          eventid={eventId}
          onSave={currentEvent ? handleUpdateEvent : handleAddEvent}
          onClose={closeModal}
        />
      </Modal>
      <Modal
        isOpen={isDetailModalOpen}
        onRequestClose={closeDetailModal}
        contentLabel="Event Details"
        className="modal"
        overlayClassName="overlay"
      >
        <EventDetail event={currentEvent} onClose={closeDetailModal} />
      </Modal>
    </div>
  );
};

export default App;
