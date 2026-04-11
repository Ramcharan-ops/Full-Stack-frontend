package com.suraksha.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.suraksha.dto.ComplaintRequest;
import com.suraksha.dto.ComplaintStatusRequest;
import com.suraksha.entity.Complaint;
import com.suraksha.service.ComplaintService;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin("*")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @PostMapping("/file")
    public String fileComplaint(@RequestBody ComplaintRequest request) {
        return complaintService.fileComplaint(request);
    }

    @GetMapping("/user/{email}")
    public List<Complaint> getUserComplaints(@PathVariable String email) {
        return complaintService.getComplaintsByUser(email);
    }

    @GetMapping("/all")
    public List<Complaint> getAllComplaints() {
        return complaintService.getAllComplaints();
    }

    @PutMapping("/{id}/status")
    public String updateComplaintStatus(@PathVariable Long id, @RequestBody ComplaintStatusRequest request) {
        return complaintService.updateComplaintStatus(id, request.getStatus());
    }
}