package com.EMS.backend.service;

import com.EMS.backend.model.Event;
import com.EMS.backend.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService{
    EventRepository eventRepository;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }



    @Override
    public List<Event> findAllEvent() {

        return eventRepository.findAll();
    }

    @Override
    public Event getEvent(int id) {
        return eventRepository.findById(id).get();
    }

    @Override
    public String createEvent(Event event) {
        eventRepository.save(event);
        return "Event Successfully created";
    }

    @Override
    public String updateEvent(int id,Event event) {
        if (eventRepository.existsById(id)) {
            event.setEventID(id);
            eventRepository.save(event);
            return "Event updated successfully";
        }
        return "Event not found";
    }

    @Override
    public String deleteEvent(int id) {
        eventRepository.deleteById(id);
        return "Event deleted successfully";
    }
}
