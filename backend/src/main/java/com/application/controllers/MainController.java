package com.application.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {

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
