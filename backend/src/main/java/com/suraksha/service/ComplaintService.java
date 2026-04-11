package com.suraksha.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suraksha.dto.ComplaintRequest;
import com.suraksha.entity.Complaint;
import com.suraksha.repository.ComplaintRepository;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    public String fileComplaint(ComplaintRequest request) {
        Complaint complaint = new Complaint();
        complaint.setTitle(request.getTitle());
        complaint.setDescription(request.getDescription());
        complaint.setVictimEmail(request.getVictimEmail());
        complaint.setStatus("PENDING");
        complaint.setCreatedAt(LocalDateTime.now());

        complaintRepository.save(complaint);
        return "Complaint filed successfully";
    }

    public List<Complaint> getComplaintsByUser(String email) {
        return complaintRepository.findByVictimEmail(email);
    }

    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    public String updateComplaintStatus(Long id, String status) {
        Complaint complaint = complaintRepository.findById(id).orElse(null);

        if (complaint == null) {
            return "Complaint not found";
        }

        complaint.setStatus(status);
        complaintRepository.save(complaint);

        return "Complaint status updated successfully";
    }
}