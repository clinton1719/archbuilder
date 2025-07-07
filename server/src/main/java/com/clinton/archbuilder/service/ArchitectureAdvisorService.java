package com.clinton.archbuilder.service;

import java.util.List;
import java.util.stream.Collectors;

import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clinton.archbuilder.model.Recommendation;
import com.clinton.archbuilder.model.UserAnswers;

@Service
public class ArchitectureAdvisorService {

    @Autowired
    private KieSession kieSession;

    public List<Recommendation> advise(UserAnswers userAnswers) {
        kieSession.insert(userAnswers);

        Recommendation recommendation = new Recommendation();
        kieSession.insert(recommendation);

        kieSession.fireAllRules();

        List<Recommendation> finalRecommendation = kieSession.getObjects(obj -> obj instanceof Recommendation)
                .stream()
                .map(obj -> (Recommendation) obj)
                .collect(Collectors.toList());

        kieSession.dispose();

        return finalRecommendation;
    }
}