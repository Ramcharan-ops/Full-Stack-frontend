package com.suraksha.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.suraksha.dto.AppointmentRequest;
import com.suraksha.entity.Appointment;
import com.suraksha.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin("*")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/book")
    public String bookAppointment(@RequestBody AppointmentRequest request) {
        return appointmentService.bookAppointment(request);
    }

    @GetMapping("/victim/{email}")
    public List<Appointment> getVictimAppointments(@PathVariable String email) {
        return appointmentService.getAppointmentsByVictim(email);
    }

    @GetMapping("/type/{type}")
    public List<Appointment> getAppointmentsByType(@PathVariable String type) {
        return appointmentService.getAppointmentsByType(type);
    }

    @GetMapping("/all")
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @PostMapping("/{id}/notes")
    public ResponseEntity<String> addNote(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        String note = payload.get("note");
        Appointment appt = appointmentService.getAppointmentById(id);
        if (appt != null) {
            appt.setSessionNote(note);
            appointmentService.updateAppointment(appt);
            return ResponseEntity.ok("Note added successfully");
        }
        return ResponseEntity.status(404).body("Appointment not found");
    }
}