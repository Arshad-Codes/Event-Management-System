package com.EMS.backend.service;

import com.EMS.backend.model.Attendee;
import com.EMS.backend.model.Event;

import java.util.List;

public interface AttendeeService {
    public List<Attendee> findAllAttendee();
    public Attendee getAttendee(int id);
    public Event createAttendee(Attendee attendee, int eventID);
}
