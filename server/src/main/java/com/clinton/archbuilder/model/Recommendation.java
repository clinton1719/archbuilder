package com.clinton.archbuilder.model;

import java.util.HashSet;
import java.util.Set;

public class Recommendation {
    private Set<String> recommendedPatterns;
    private String explanation;

    public Recommendation() {
        this.recommendedPatterns = new HashSet<>();
    }

    public void addPattern(String pattern) {
        this.recommendedPatterns.add(pattern);
    }

    public Set<String> getRecommendedPatterns() {
        return recommendedPatterns;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getExplanation() {
        return explanation;
    }
}
