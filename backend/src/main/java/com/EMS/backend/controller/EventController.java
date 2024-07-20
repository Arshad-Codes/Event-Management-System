package com.EMS.backend.controller;

import com.EMS.backend.model.Event;
import com.EMS.backend.service.EventService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/event")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {
    private EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping()
    public List<Event> getAllEvent(){
        return eventService.findAllEvent();
    }

    @GetMapping("/{id}")
    public Event getEvent(@PathVariable("id") int id){
        return eventService.getEvent(id);
    }

    @PostMapping
    public String createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }

    @PutMapping("/{id}")
    public String updateEvent(@PathVariable int id, @RequestBody Event event) {
        return eventService.updateEvent(id, event);
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable int id) {
        eventService.deleteEvent(id);
    }









}
