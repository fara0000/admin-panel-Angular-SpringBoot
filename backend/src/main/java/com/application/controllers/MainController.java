package com.application.controllers;

import com.application.entities.Point;
import com.application.repositories.PointRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class MainController {

    private final PointRepository pointRepository;

    public MainController(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    @PostMapping("/check")
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
        List<Point> table = pointRepository.findAll();
        return table;
    }

    @GetMapping("/getpoints")
    public List<Point> test (){
        List<Point>  table = pointRepository.findAll();
        return table;
    }

    @GetMapping("/main")
    public String mainPage() {
        return "index.html";
    }
    @GetMapping("/login")
    public String login() {
        return "index.html";
    }

    @GetMapping("/register")
    public String register() {
        return "index.html";
    }
}
