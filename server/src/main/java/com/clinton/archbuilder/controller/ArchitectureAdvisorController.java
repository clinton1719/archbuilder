package com.clinton.archbuilder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clinton.archbuilder.model.Recommendation;
import com.clinton.archbuilder.model.UserAnswers;
import com.clinton.archbuilder.service.ArchitectureAdvisorService;

@RestController
@RequestMapping("/api/architecture-advisor")
public class ArchitectureAdvisorController {

    @Autowired
    private ArchitectureAdvisorService advisorService;

    @PostMapping("/advise")
    public ResponseEntity<List<Recommendation>> getArchitectureAdvice(@RequestBody UserAnswers userAnswers) {
        List<Recommendation> recommendationList = advisorService.advise(userAnswers);
        return ResponseEntity.ok(recommendationList);
    }
}