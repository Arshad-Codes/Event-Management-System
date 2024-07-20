package com.EMS.backend.controller;


import com.EMS.backend.model.Attendee;
import com.EMS.backend.service.AttendeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/attendee")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AttendeeController {
    private AttendeeService attendeeService;

    public AttendeeController(AttendeeService attendeeService) {
        this.attendeeService = attendeeService;
    }

    @GetMapping()
    public List<Attendee> getAllAttendee(){
        return attendeeService.findAllAttendee();
    }
    @GetMapping("/{id}")
    public Attendee getAttendee(@PathVariable("id") int id){
        return attendeeService.getAttendee(id);
    }
    @PostMapping("/{eventId}")
    public String createAttendee(@RequestBody Attendee attendee, @PathVariable int eventId) {
        return attendeeService.createAttendee(attendee, eventId);
    }



}
