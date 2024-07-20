package com.EMS.backend.repository;

import com.EMS.backend.model.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Attendee, Integer> {

}
