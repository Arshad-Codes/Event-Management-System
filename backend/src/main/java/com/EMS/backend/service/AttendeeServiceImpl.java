package com.EMS.backend.service;

import com.EMS.backend.model.Attendee;
import com.EMS.backend.model.Event;
import com.EMS.backend.repository.AttendeeRepository;
import com.EMS.backend.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendeeServiceImpl implements AttendeeService{

    private AttendeeRepository attendeeRepository;
    private EventRepository eventRepository;

    public AttendeeServiceImpl(AttendeeRepository attendeeRepository, EventRepository eventRepository){
        this.attendeeRepository = attendeeRepository;
        this.eventRepository = eventRepository;
    }
    @Override
    public List<Attendee> findAllAttendee() {
        return attendeeRepository.findAll();
    }

    @Override
    public Attendee getAttendee(int id) {
        return attendeeRepository.findById(id).get();
    }

    @Override
    public String createAttendee(Attendee attendee, int eventID) {
        Event event = eventRepository.findById(eventID).get();
        if(event == null){
            return "Event not found";
        }

        attendee.setEvent(event);
        attendeeRepository.save(attendee);

        event.addAttendee(attendee.getFullName());
        eventRepository.save(event);


        return "Attendee Successfully created";
    }
}
