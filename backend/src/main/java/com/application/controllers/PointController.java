package com.application.controllers;

import com.application.entities.Point;
import com.application.repositories.PointRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
public class PointController {
    private final PointRepository pointRepository;

    public PointController(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    @PostMapping("/lab4/checkPoint")
    public Iterable<Point> check(@RequestBody Map<String, String> request){
        double x = Double.parseDouble(request.get("x"));
        double y = Double.parseDouble(request.get("y").replace(",", "."));
        double r = Double.parseDouble(request.get("r"));
        String userName = "";
        boolean correct = true;
        if (request.get("username") == null) {log.error("userName isn't set"); /*correct = false;*/}
        else userName = request.get("username");
        if (Math.abs(x) >= 2.5) {log.error("Wrong value of X"); correct = false;}
        if (Math.abs(x) >= 2.5) {log.error("Wrong value of Y"); correct = false;}
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

        for (Point point: pointRepository.findByUserName(userName)) {
            if (point.getX() == x && point.getY() == y && point.getR() == r) {
                correct = false;
                break;
            }
        }
        if (correct) pointRepository.save(new Point(x, y, r, income, userName));
        log.info("check points by " + userName + " " + new Point(x, y, r, income, userName));
        return pointRepository.findByUserName(userName);
    }

    @GetMapping("/lab4/getPoints/{userName}")
    public List<Point> test (@PathVariable String userName) {
        log.info("return points by " + userName);
        return pointRepository.findByUserName(userName);
    }

    @Transactional
    @DeleteMapping("/lab4/dropTable/{userName}")
    public void dropTable (@PathVariable String userName) {
        log.info("delete points by " + userName);
        pointRepository.deleteByUserName(userName);
        pointRepository.flush();
    }

}
