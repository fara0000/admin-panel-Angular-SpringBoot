package com.application.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {

    @GetMapping("/lab4/main")
    public String mainPage() {
        return "index.html";
    }

    @GetMapping("/lab4/login")
    public String login() {
        return "index.html";
    }

    @GetMapping("/lab4/register")
    public String register() {
        return "index.html";
    }
}
