package com.clinton.archbuilder.model;

public class UserAnswers {
    private String scaleExpectation;
    private String responsiveness;
    private String availability;
    private String dataConsistency;
    private String communication;
    private String tolerance;
    private String storage;
    private String applicationComplexity;
    private String frequencyOfChange;
    private String businessTransactionsComplexity;
    private String technologyStack;

    public UserAnswers(String scaleExpectation, String responsiveness, String availability, String dataConsistency,
            String communication, String tolerance, String storage, String applicationComplexity,
            String frequencyOfChange, String businessTransactionsComplexity, String technologyStack) {
        this.scaleExpectation = scaleExpectation;
        this.responsiveness = responsiveness;
        this.availability = availability;
        this.dataConsistency = dataConsistency;
        this.communication = communication;
        this.tolerance = tolerance;
        this.storage = storage;
        this.applicationComplexity = applicationComplexity;
        this.frequencyOfChange = frequencyOfChange;
        this.businessTransactionsComplexity = businessTransactionsComplexity;
        this.technologyStack = technologyStack;
    }

    public String getScaleExpectation() {
        return scaleExpectation;
    }

    public void setScaleExpectation(String scaleExpectation) {
        this.scaleExpectation = scaleExpectation;
    }

    public String getResponsiveness() {
        return responsiveness;
    }

    public void setResponsiveness(String responsiveness) {
        this.responsiveness = responsiveness;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getDataConsistency() {
        return dataConsistency;
    }

    public void setDataConsistency(String dataConsistency) {
        this.dataConsistency = dataConsistency;
    }

    public String getCommunication() {
        return communication;
    }

    public void setCommunication(String communication) {
        this.communication = communication;
    }

    public String getTolerance() {
        return tolerance;
    }

    public void setTolerance(String tolerance) {
        this.tolerance = tolerance;
    }

    public String getStorage() {
        return storage;
    }

    public void setStorage(String storage) {
        this.storage = storage;
    }

    public String getApplicationComplexity() {
        return applicationComplexity;
    }

    public void setApplicationComplexity(String applicationComplexity) {
        this.applicationComplexity = applicationComplexity;
    }

    public String getFrequencyOfChange() {
        return frequencyOfChange;
    }

    public void setFrequencyOfChange(String frequencyOfChange) {
        this.frequencyOfChange = frequencyOfChange;
    }

    public String getBusinessTransactionsComplexity() {
        return businessTransactionsComplexity;
    }

    public void setBusinessTransactionsComplexity(String businessTransactionsComplexity) {
        this.businessTransactionsComplexity = businessTransactionsComplexity;
    }

    public String getTechnologyStack() {
        return technologyStack;
    }

    public void setTechnologyStack(String technologyStack) {
        this.technologyStack = technologyStack;
    }

    @Override
    public String toString() {
        return "UserAnswers [scaleExpectation=" + scaleExpectation + ", responsiveness=" + responsiveness
                + ", availability=" + availability + ", dataConsistency=" + dataConsistency + ", communication="
                + communication + ", tolerance=" + tolerance + ", storage=" + storage + ", applicationComplexity="
                + applicationComplexity + ", frequencyOfChange=" + frequencyOfChange
                + ", businessTransactionsComplexity=" + businessTransactionsComplexity + ", technologyStack="
                + technologyStack + "]";
    }

}
