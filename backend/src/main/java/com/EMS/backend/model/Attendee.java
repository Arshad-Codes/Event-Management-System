package com.EMS.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="attendee")
public class Attendee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int attendeeID;
    private String fullName;

    @ManyToOne
    @JoinColumn(name="eventID", nullable=false)
    private Event event;

    public Attendee() {
    }

    public Attendee(int attendeeID, String fullName, Event event) {
        this.attendeeID = attendeeID;
        this.fullName = fullName;
        this.event = event;
    }

    public int getAttendeeID() {
        return attendeeID;
    }

    public void setAttendeeID(int attendeeID) {
        this.attendeeID = attendeeID;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
