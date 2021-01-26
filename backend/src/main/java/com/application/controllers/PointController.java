package com.application.controllers;

import com.application.entities.Point;
import com.application.repositories.PointRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@Slf4j
public class PointController {
    private final PointRepository pointRepository;

    public PointController(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    @PostMapping("/checkPoint")
    public Iterable<Point> check(@RequestBody Map<String, String> request){
        double x = Double.parseDouble(request.get("x"));
        double y = Double.parseDouble(request.get("y"));
        double r = Double.parseDouble(request.get("r"));
        int userId = -1;
        boolean correct = true;
        if (request.get("userId") == null) {log.error("userId isn't set"); /*correct = false;*/}
        else userId = Integer.parseInt(request.get("userId"));
        if (Math.abs(x) > 2) {log.error("Wrong value of X"); correct = false;}
        if (Math.abs(x) > 3) {log.error("Wrong value of Y"); correct = false;}
        if (Math.abs(r) > 2) {log.error("Wrong value of R"); correct = false;}
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

        for (Point point: pointRepository.findByUserId(userId)) {
            if (point.getX() == x && point.getY() == y && point.getR() == r) {
                correct = false;
                break;
            }
        }
        if (correct) pointRepository.save(new Point(x, y, r, income, userId));
        return pointRepository.findAll();
    }

    @GetMapping("/getPoints") ///{userId}
    public List<Point> test () throws InterruptedException { //@PathVariable String userId
        Thread.sleep(50);
//        return pointRepository.findByUserId(Integer.parseInt(userId));
        return pointRepository.findAll();
    }

}
