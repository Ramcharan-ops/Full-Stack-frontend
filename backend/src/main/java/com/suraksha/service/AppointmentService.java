package com.suraksha.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suraksha.dto.AppointmentRequest;
import com.suraksha.entity.Appointment;
import com.suraksha.repository.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public String bookAppointment(AppointmentRequest request) {
        Appointment appointment = new Appointment();
        appointment.setVictimEmail(request.getVictimEmail());
        appointment.setType(request.getType());
        appointment.setAppointmentDate(LocalDate.parse(request.getAppointmentDate()));
        appointment.setAppointmentTime(LocalTime.parse(request.getAppointmentTime()));
        appointment.setIssueSummary(request.getIssueSummary());
        appointment.setStatus("BOOKED");

        appointmentRepository.save(appointment);
        return "Appointment booked successfully";
    }

    public List<Appointment> getAppointmentsByVictim(String victimEmail) {
        return appointmentRepository.findByVictimEmail(victimEmail);
    }

    public List<Appointment> getAppointmentsByType(String type) {
        return appointmentRepository.findByType(type);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Appointment getAppointmentById(Long id) {
        return appointmentRepository.findById(id).orElse(null);
    }

    public void updateAppointment(Appointment appt) {
        appointmentRepository.save(appt);
    }
}