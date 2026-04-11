package com.suraksha.dto;

public class ComplaintRequest {

    private String title;
    private String description;
    private String victimEmail;

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String getVictimEmail() { return victimEmail; }

    public void setVictimEmail(String victimEmail) { this.victimEmail = victimEmail; }
}