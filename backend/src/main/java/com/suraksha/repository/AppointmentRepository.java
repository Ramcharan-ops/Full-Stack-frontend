package com.suraksha.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.suraksha.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByVictimEmail(String victimEmail);

    List<Appointment> findByType(String type);
}