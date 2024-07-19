package com.EMS.backend.service;

import com.EMS.backend.model.Event;

import java.util.List;

public interface EventService {
    public List<Event> findAllEvent();
    public Event getEvent(int id);
    public String createEvent(Event event);
    public String updateEvent(int id, Event event);
    public String deleteEvent(int id);

}
