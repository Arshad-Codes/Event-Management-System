package com.EMS.backend.service;

import com.EMS.backend.model.Attendee;

import java.util.List;

public interface AttendeeService {
    public List<Attendee> findAllAttendee();
    public Attendee getAttendee(int id);
    public String createAttendee(Attendee attendee, int eventID);
}
