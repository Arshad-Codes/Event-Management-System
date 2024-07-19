package com.EMS.backend.repository;

import com.EMS.backend.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Integer>{

}
