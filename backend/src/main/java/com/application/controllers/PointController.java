package com.application.controllers;

import com.application.entities.Point;
import com.application.repositories.PointRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class PointController {
    private final PointRepository pointRepository;

    public PointController(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    @PostMapping("main/checkPoint")
    public Iterable<Point> check(@RequestBody Map<String, String> request){
//        TODO: add validation and check notNull
        double x = Double.parseDouble(request.get("x"));
        double y = Double.parseDouble(request.get("y"));
        double r = Double.parseDouble(request.get("r"));
        String income = "false";
        if (y > 0){
            if ((y <= 2 * x + r) && (x <= 0)) income = "true";
        } else {
            if (x >= 0){
                if ((x <= r/2) && (y >= -r)) income = "true";
            }
            if (x < 0){
                if (x * x + y * y <= r * r / 4)income = "true";
            }
        }
        pointRepository.save(new Point(x, y, r, income));
        return pointRepository.findAll();
    }

    @GetMapping("main/getPoints")
    public List<Point> test (){
        return pointRepository.findAll();
    }
}
