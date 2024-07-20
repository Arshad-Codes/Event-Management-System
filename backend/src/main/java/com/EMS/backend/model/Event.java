package com.EMS.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "event")

public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventID;
    private String name;
    private String description;
    private LocalDate date;
    private String location;
    private List<String> attendees = new ArrayList<>();

    public int getEventID() {
        return eventID;
    }

    public void setEventID(int eventID) {
        this.eventID = eventID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<String> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<String> attendees) {
        this.attendees = attendees;
    }

    public void addAttendee(String attendee) {
        this.attendees.add(attendee);
    }
    public Event(int eventID, String name, String description, LocalDate date, String location, List<String> attendees) {
        this.eventID = eventID;
        this.name = name;
        this.description = description;
        this.date = date;
        this.location = location;
        this.attendees = attendees;
    }

    public Event() {
    }

}
