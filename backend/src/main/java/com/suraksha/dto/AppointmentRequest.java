package com.suraksha.dto;

public class AppointmentRequest {

    private String victimEmail;
    private String type;
    private String appointmentDate;
    private String appointmentTime;
    private String issueSummary;

    public String getVictimEmail() {
        return victimEmail;
    }

    public void setVictimEmail(String victimEmail) {
        this.victimEmail = victimEmail;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(String appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getIssueSummary() {
        return issueSummary;
    }

    public void setIssueSummary(String issueSummary) {
        this.issueSummary = issueSummary;
    }
}